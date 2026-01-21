import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useNavigate } from 'react-router-dom';

const ResearchAgent = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState(null);
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSources, setShowSources] = useState(false);
  const [searchType, setSearchType] = useState('all');

  const handleSearch = async () => {
    if (!topic.trim()) {
      setError('Please enter a research topic');
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);
    setSources([]);
    setShowSources(false);

    try {
      const backendURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001';

      const response = await axios.post(
        `${backendURL}/api/research`,
        { topic, searchType },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setResults(response.data.result);
      setSources(response.data.sources || []);
    } catch (err) {
      console.error('Error fetching research:', err);
      if (err.response?.status === 401) {
        setError('Authentication failed. Check backend API configuration.');
      } else if (err.response?.status === 429) {
        setError('Rate limit exceeded. Please try again later.');
      } else if (err.code === 'ERR_NETWORK') {
        setError('Cannot connect to backend server. Make sure it\'s running on port 5001.');
      } else {
        setError(err.response?.data?.error || err.message || 'Failed to fetch research results. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{backgroundColor: '#1B1B1B'}}>
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl">
          {/* Premium Card */}
          <div className="rounded-3xl shadow-2xl overflow-hidden" style={{backgroundColor: '#1B1B1B', border: '1px solid #4442C8'}}>
            {/* Premium Header Section */}
            <div className="px-12 py-16 relative overflow-hidden" style={{backgroundColor: '#4442C8'}}>
              <div className="relative z-10">
                <div className="inline-block px-3 py-1.5 rounded-lg border mb-6" style={{backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'rgba(255,255,255,0.3)'}}>
                  <p className="text-xs font-semibold text-white tracking-wider">Next-Gen Research Helper</p>
                </div>
                <h2 className="font-bold text-white mb-2 tracking-tight leading-tight" style={{fontSize: '48px'}}>
                  Your Research AI Agent
                </h2>
                <p className="text-white font-light leading-relaxed max-w-2xl opacity-95" style={{fontSize: '16px'}}>
                  Comprehensive AI-powered research analysis with verified sources and institutional-grade intelligence for your organization.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-12" style={{backgroundColor: '#1B1B1B'}}>
              {/* Input Section */}
              <div className="mb-10">
                <label className="block font-semibold mb-2 text-white" style={{fontSize: '16px'}}>
                  Research Topic
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={topic}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your research inquiry..."
                    disabled={loading}
                    className="flex-1 px-4 py-3 rounded-lg focus:outline-none disabled:cursor-not-allowed font-normal text-white transition"
                    style={{
                      backgroundColor: '#2a2a2a',
                      border: '1px solid #4442C8',
                      boxShadow: 'none',
                      color: 'white',
                      fontSize: '16px'
                    }}
                    onChange={(e) => {e.target.style.color = 'white'; setTopic(e.target.value);}}
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 1px #4442C8'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                  />
                  <button
                    onClick={handleSearch}
                    disabled={loading || !topic.trim()}
                    className="px-6 py-3 text-white font-semibold rounded-lg disabled:cursor-not-allowed transition duration-200 whitespace-nowrap shadow-lg disabled:opacity-50"
                    style={{fontSize: '16px', backgroundColor: '#4442C8'}}
                  >
                    {loading ? 'Analyzing...' : 'Analyze Now'}
                  </button>
                </div>

                {/* Search Type Filter */}
                <div className="mt-6 flex gap-4 flex-wrap">
                  <p className="w-full font-semibold text-white opacity-90 mb-2" style={{fontSize: '16px'}}>Filter By Source</p>
                  {[
                    { value: 'all', label: 'All Sources' },
                    { value: 'papers', label: 'Research Papers' },
                    { value: 'journal', label: 'Journals' },
                    { value: 'news', label: 'News' },
                    { value: 'academic', label: 'Academic' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => setSearchType(option.value)}
                      className={`px-4 py-2 rounded-lg font-medium transition duration-200 border ${
                        searchType === option.value
                          ? 'text-white'
                          : 'text-white hover:border-opacity-100'
                      }`}
                      style={searchType === option.value ? {backgroundColor: '#4442C8', borderColor: '#4442C8', border: '0.5px solid', fontSize: '16px'} : {backgroundColor: 'transparent', borderColor: '#4442C8', border: '1px solid', fontSize: '16px'}}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-8 p-4 rounded-lg shadow-sm" style={{backgroundColor: 'rgba(220, 38, 38, 0.2)', border: '1px solid rgba(220, 38, 38, 0.5)'}}>
                  <p className="font-semibold text-white" style={{fontSize: '16px'}}>Error: {error}</p>
                </div>
              )}

              {/* Loading State */}
              {loading && (
                <div className="mb-8 flex flex-col items-center justify-center py-16">
                  <div className="animate-spin rounded-full h-12 w-12 border-2 mb-6" style={{borderColor: '#444', borderTopColor: '#4442C8'}}></div>
                  <p className="text-white font-semibold" style={{fontSize: '16px'}}>Analyzing your research...</p>
                  <p className="text-white mt-2 font-normal" style={{fontSize: '16px'}}>Gathering insights from multiple sources</p>
                </div>
              )}

              {/* Results Section */}
              {results && !loading && (
                  <div className="rounded-2xl p-10" style={{backgroundColor: '#2a2a2a', border: '1px solid #4442C8'}}>
                  <div className="mb-8 pb-8" style={{borderBottomWidth: '1px', borderColor: '#444'}}>
                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Research Results
                        </h3>
                      <p className="font-normal text-white" style={{fontSize: '16px'}}>
                          Topic: <span className="font-semibold" style={{color: '#FFFFFF'}}>"{topic}"</span>
                        </p>
                      </div>
                      {/* Sources Button - Right Side */}
                      <button
                        onClick={() => setShowSources(!showSources)}
                        className="flex items-center gap-2 px-4 py-2 font-semibold rounded-lg transition duration-200 whitespace-nowrap flex-shrink-0"
                        style={{fontSize: '16px', background: '#4442C8', color: '#FFFFFF', border: '.5px solid #FFFFFF'}}
                        onMouseEnter={(e) => e.target.style.background = '#4442C8'}
                        onMouseLeave={(e) => e.target.style.background = '#4442C8'}
                      >
                        {showSources ? 'Hide' : 'Show'} Sources
                      </button>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto pr-4 space-y-4">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({node, ...props}) => <h3 className="text-xl font-bold text-white mt-6 mb-4 " {...props} style={{fontSize: '18px'}} />,
                        h2: ({node, ...props}) => <h3 className="text-xl font-bold text-white mt-6 mb-4 " style={{fontSize: '18px'}} {...props} />,
                        h3: ({node, ...props}) => <h3 className="font-bold text-white mt-6 mb-4" style={{fontSize: '16px'}} {...props} />,
                        p: ({node, ...props}) => <p className="text-white leading-relaxed font-normal text-justify mb-4" style={{fontSize: '16px'}} {...props} />,
                        ul: ({node, ...props}) => <ul className="space-y-4 pl-0 mb-4" {...props} />,
                        ol: ({node, ...props}) => <ol className="space-y-4 pl-0 mb-4" {...props} />,
                        li: ({node, ordered, index, ...props}) => (
                          <li className="flex gap-3 text-white list-none" {...props}>
                            <span className="font-bold text-lg flex-shrink-0" style={{color: '#FFFFFF'}}>
                              {ordered ? `${index + 1}.` : '•'}
                            </span>
                            <span className="font-normal text-white" style={{fontSize: '16px'}}>{props.children}</span>
                          </li>
                        ),
                        strong: ({node, ...props}) => <strong className="font-semibold" style={{color: '#FFFFFF'}} {...props} />,
                        em: ({node, ...props}) => <em className="italic" style={{color: 'white'}} {...props} />,
                        code: ({node, inline, ...props}) => 
                          inline ? (
                            <code className="px-1.5 py-0.5 rounded text-xs" style={{backgroundColor: 'rgba(68, 66, 200, 0.2)', color: '#4442C8', fontFamily: 'monospace'}} {...props} />
                          ) : (
                            <code className="block p-3 rounded-lg text-xs my-2 whitespace-pre-wrap" style={{backgroundColor: 'rgba(68, 66, 200, 0.2)', color: '#4442C8', fontFamily: 'monospace'}} {...props} />
                          ),
                        a: ({node, ...props}) => <a className="underline" style={{color: '#4442C8', cursor: 'pointer'}} target="_blank" rel="noopener noreferrer" {...props} />,
                        del: ({node, ...props}) => <del style={{color: 'white', textDecoration: 'line-through'}} {...props} />,
                      }}
                    >
                      {results}
                    </ReactMarkdown>
                  </div>

                  {/* Sources Section - Shows when button clicked */}
                  {showSources && (
                    <div className="mt-8 pt-8" style={{borderTopWidth: '1px', borderColor: '#444'}}>
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold  mb-1" style={{color: '#FFFFFF'}}>
                          Sources & References
                        </h4>
                        <p className="text-1xl font-normal text-white">
                          Verified information sources
                        </p>
                      </div>
                      {sources && sources.length > 0 ? (
                        <div className="space-y-2">
                          {sources.map((source, index) => {
                            let domain = '';
                            try {
                              domain = new URL(source).hostname;
                            } catch (e) {
                              domain = source;
                            }
                            
                            return (
                              <a
                                key={index}
                                href={source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 p-3 rounded-lg border border-slate-600 transition-all duration-200 group"
                                style={{backgroundColor: 'rgba(27, 27, 27, 0.6)'}}
                                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4442C8'}
                                onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
                              >
                                <div className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center" style={{backgroundColor: '#4442C8'}}>
                                  <span className="text-white font-bold text-xs">{index + 1}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <img 
                                      src={`https://www.google.com/s2/favicons?sz=16&domain=${domain}`}
                                      alt={domain}
                                      className="w-4 h-4 rounded"
                                      onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                    <p className="text-xs text-white font-medium group-hover:text-[#4442C8] transition truncate">
                                      {domain}
                                    </p>
                                  </div>
                                </div>
                                <svg className="w-4 h-4 text-slate-500 flex-shrink-0 group-hover:text-[#4442C8] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="p-6 rounded-lg border" style={{backgroundColor: 'rgba(27, 27, 27, 0.4)', borderColor: '#444'}}>
                          <p className="font-medium text-sm text-center text-white">No sources found</p>
                          <p className="text-xs text-center mt-1 text-white">Try another research topic</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Empty State */}
              {!results && !loading && !error && (
                <div className="text-center py-24 flex flex-col items-center justify-center">
                  <img src={'/assets/logo_white.png'} alt="ResearchIQ Logo" className="mb-5" style={{height: '80px', opacity: '1'}} />
                  <p className="text-white text-2xl font-bold mb-4">
                    Begin Your Research
                  </p>
                  <p className="text-white font-light max-w-lg mx-auto text-base leading-relaxed mb-10 opacity-90">
                    Enter a research topic to access institutional-grade analysis with verified sources and comprehensive intelligence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => navigate('/documentation')} className="px-8 py-3 text-white font-semibold rounded-lg transition shadow-lg text-sm hover:shadow-xl" style={{backgroundColor: '#4442C8'}} onMouseEnter={(e) => e.target.style.transform = 'translateY(-1px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                      Documentation
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer style={{backgroundColor: '#1B1B1B', borderTop: '1px solid #4442C8'}} className="mt-16 py-8">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-white font-semibold mb-2">ResearchIQ</p>
          <p className="text-white text-sm opacity-75">Your AI-powered research assistant</p>
          <p className="text-white text-xs mt-4 opacity-50">© 2026 ResearchIQ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ResearchAgent;
