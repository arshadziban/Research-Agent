const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend server is running' });
});

// Research endpoint
app.post('/api/research', async (req, res) => {
  try {
    const { topic, searchType = 'all' } = req.body;

    // Validate input
    if (!topic || !topic.trim()) {
      return res.status(400).json({ error: 'Research topic is required' });
    }

    // Validate API key
    const apiKey = process.env.PERPLEXITY_API_KEY;
    if (!apiKey) {
      console.error('PERPLEXITY_API_KEY not configured');
      return res.status(500).json({
        error: 'Backend API key not configured. Contact administrator.'
      });
    }

    // Prepare the prompt
    let searchContext = '';
    if (searchType === 'papers' || searchType === 'paper') {
      searchContext = 'Please restrict your response to formal academic research papers and peer-reviewed journal articles only. Ensure the information is scholarly and references are properly cited.';
    } else if (searchType === 'journal') {
      searchContext = 'Please provide information exclusively from peer-reviewed journal articles. Ensure all sources are formal, scholarly, and properly cited.';
    } else if (searchType === 'news') {
      searchContext = 'Please focus on recent news articles, current events, and recent developments from reputable news sources. Ensure the information is up-to-date and well-cited.';
    } else if (searchType === 'academic') {
      searchContext = 'Please focus on information from academic institutions, universities, and reputable educational sources. Ensure the content is formal and well-referenced.';
    }

    const prompt = `${searchContext}You are a research assistant. Please provide a comprehensive research report on: "${topic}"

Format your response with the following sections:

**Key Findings:**
- List 3-5 main findings about the topic

**Important Facts:**
- List 4-6 crucial facts and statistics

**Research Gaps:**
- Identify 3-4 areas that need further research

**Future Research Ideas:**
- Suggest 3-4 future research directions

Please be thorough, accurate, and cite credible sources where applicable.`;

    // Call Perplexity API
    const response = await axios.post(
      'https://api.perplexity.ai/chat/completions',
      {
        model: 'sonar',
        messages: [
          {
            role: 'system',
            content: 'You are a research assistant. Provide comprehensive research reports with key findings, important facts, research gaps, and future research directions.'
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Extract and return the result with sources
    const researchResult = response.data.choices[0].message.content;
    
    // Extract citations from the response
    let sources = [];
    
    // Perplexity API returns citations in the message
    if (response.data.citations && Array.isArray(response.data.citations)) {
      sources = response.data.citations;
    } else if (response.data.choices[0].citations) {
      sources = response.data.choices[0].citations;
    }
    
    // If no sources from API, try to extract URLs from the content
    if (sources.length === 0) {
      const urlRegex = /(https?:\/\/[^\s)]+?)(?=[.,\s\)]|$)/g;
      const extractedUrls = researchResult.match(urlRegex) || [];
      sources = [...new Set(extractedUrls)];
    }
    
    res.json({ 
      result: researchResult,
      sources: sources 
    });

  } catch (error) {
    console.error('Error calling Perplexity API:', error.message);
    if (error.response?.data) {
      console.error('API Response Error:', JSON.stringify(error.response.data, null, 2));
    }

    // Handle specific error cases
    if (error.response?.status === 400) {
      return res.status(400).json({
        error: 'Bad request to Perplexity API. Check your request format or API key.',
        details: error.response?.data?.error || error.response?.data
      });
    }

    if (error.response?.status === 401) {
      return res.status(401).json({
        error: 'Authentication failed. Check your Perplexity API key.'
      });
    }

    if (error.response?.status === 429) {
      return res.status(429).json({
        error: 'Rate limit exceeded. Please try again later.'
      });
    }

    if (error.response?.status === 404) {
      return res.status(404).json({
        error: 'API endpoint not found. Check the model name.'
      });
    }

    res.status(500).json({
      error: error.message || 'Failed to fetch research results'
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
