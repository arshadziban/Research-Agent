# AI Research Agent - Backend

Node.js/Express API server for Perplexity AI research analysis integration.

## Features

- ✅ RESTful API endpoints
- ✅ Secure API key handling
- ✅ CORS enabled
- ✅ Comprehensive error handling
- ✅ Production-ready

## Quick Start

### Prerequisites

- Node.js (v14+)
- Perplexity API key

### Installation

```bash
npm install
```

### Environment Configuration

Create a `.env` file (copy from `.env.example`):
```
PERPLEXITY_API_KEY=your_api_key_here
PORT=5000
```

Get your API key from [https://www.perplexity.ai/api](https://www.perplexity.ai/api)

### Development

```bash
npm run dev
```

Server runs on `http://localhost:5000`

### Production

```bash
npm start
```

## API Endpoints

### Health Check
```
GET /api/health

Response:
{
  "status": "Backend server is running"
}
```

### Research Analysis
```
POST /api/research

Headers:
Content-Type: application/json

Body:
{
  "topic": "Your research subject"
}

Response:
{
  "result": "Comprehensive research analysis..."
}
```

## Project Structure

```
.
├── server.js              # Express server
├── package.json
├── .env                   # Environment variables (not tracked)
├── .env.example           # Example configuration
└── .gitignore
```

## Configuration

### Environment Variables

```
PERPLEXITY_API_KEY=your_api_key  # Required - Perplexity API key
PORT=5000                        # Optional - Server port (default: 5000)
```

## Error Handling

The API returns appropriate HTTP status codes:

- `200` - Success
- `400` - Bad request (missing topic)
- `401` - Authentication failed (invalid API key)
- `429` - Rate limit exceeded
- `404` - Endpoint not found
- `500` - Server error

## Troubleshooting

**"PERPLEXITY_API_KEY not configured"**
- Verify `.env` file exists
- Check API key is correctly set
- Restart server

**"Authentication failed"**
- Validate API key is correct
- Check key is not expired
- Verify key from Perplexity.ai

**"Rate limit exceeded"**
- Wait before next request
- Check Perplexity API limits

## Security

- API key stored in environment variables
- CORS enabled for frontend
- Input validation on all endpoints
- Error messages don't expose sensitive information

## Scripts

- `npm start` - Production server
- `npm run dev` - Development server with auto-reload

## Dependencies

- `express` - Web framework
- `cors` - CORS middleware
- `axios` - HTTP client
- `dotenv` - Environment variables

## Dev Dependencies

- `nodemon` - Auto-reload development

## Deployment

### Environment Setup

Configure these variables on your hosting platform:

- `PERPLEXITY_API_KEY` (required)
- `PORT` (optional, auto-assigned on some platforms)
- `NODE_ENV=production`

### Supported Platforms

- Heroku
- Railway
- Render
- Vercel
- AWS Lambda
- Google Cloud Functions

## Additional Resources

- [Express Documentation](https://expressjs.com)
- [Perplexity API Documentation](https://www.perplexity.ai/api)
- [Axios Documentation](https://axios-http.com)

---

**Professional Research Intelligence | Backend**
