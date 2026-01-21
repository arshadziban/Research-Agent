# ResearchIQ
[![Node.js](https://img.shields.io/badge/node-%3E%3D14-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/react-18+-61dafb.svg)](https://react.dev/)

AI-powered research analysis platform leveraging Perplexity AI API for institutional-grade research insights.

## Core Features

- **Advanced AI Research Analysis** - Institutional-grade insights and comprehensive analysis
- **Multi-Source Filtering** - Academic papers, peer-reviewed journals, news articles, and scholarly content
- **Real-time Processing** - Continuous feedback mechanisms throughout analysis workflow
- **Professional User Interface** - Enterprise-grade design utilizing Tailwind CSS
- **Secure Backend Infrastructure** - RESTful API with credential and data management
- **Cross-Platform Compatibility** - Seamless functionality across desktop and mobile devices

## Installation and Setup

### Prerequisites
- Node.js v14 or higher
- npm or yarn package manager
- Valid API credentials for research service

1. **Clone the Repository**
```bash
git clone https://github.com/arshadziban/Research-Agent.git
```

2. **Configure Backend Environment**
```bash
cd backend
npm install
cp .env.example .env
# Add your API_KEY to .env
npm run dev
```

3. **Configure Frontend Environment** (in separate terminal)
```bash
cd frontend
npm install
npm start
```

The backend service operates at `http://localhost:5001`  
The frontend application is accessible at `http://localhost:3000`

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, Tailwind CSS, Axios, React-markdown |
| **Backend** | Node.js, Express.js |
| **API** | Enterprise Research API Service |

## API Endpoints

```bash
# System health verification
GET /api/health

# Submit research analysis request
POST /api/research
Content-Type: application/json

{
  "topic": "Research subject or query",
  "searchType": "all|papers|journal|news|academic"
}
```

## Environment Variables

**Backend Configuration (.env)**
```
API_KEY=your_api_key_here
PORT=5001
```

**Frontend Configuration (.env)**
```
REACT_APP_BACKEND_URL=http://localhost:5001
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| API authentication fails | Verify API_KEY credentials in backend/.env configuration |
| Backend connectivity issues | Confirm backend service is executing on port 5001 |
| Insufficient research results | Validate API key validity and review backend logs |
| Rate limit constraints | Implement retry logic or upgrade API service plan |


## Project Structure

### Frontend Application
```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ResearchAgent.js    # Primary application component
│   ├── index.css               # Tailwind CSS stylesheet
│   ├── index.js                # React application entry point
│   └── App.js                  # Root application component
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── .env
└── .env.example
```

### Backend Service
```
backend/
├── server.js                   # Express.js server and API route definitions
├── package.json
├── .env
├── .env.example
└── .gitignore
```


**Professional Research Intelligence Platform | 2026**
