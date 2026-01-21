# AI Research Agent - Frontend

Professional React web application for research analysis powered by Perplexity AI.

## Features

- ✅ Professional, clean user interface
- ✅ Real-time research analysis
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Loading state feedback
- ✅ Error handling and validation
- ✅ Keyboard support (Enter to submit)

## Quick Start

### Prerequisites

- Node.js (v14+)
- Backend server running on `http://localhost:5000`

### Installation

```bash
npm install
```

### Environment Configuration

Create a `.env` file (copy from `.env.example`):
```
REACT_APP_BACKEND_URL=http://localhost:5000
```

### Development

```bash
npm start
```

Opens at `http://localhost:3000`

### Production Build

```bash
npm build
```

## Project Structure

```
src/
├── components/
│   └── ResearchAgent.js    # Main component
├── App.js                  # App wrapper
├── index.js                # React entry point
└── index.css               # Tailwind styles
```

## Component Details

### ResearchAgent Component

Main component handling:
- Research topic input
- API calls to backend
- Loading and error states
- Results display

## Usage

1. Enter research subject
2. Click "Analyze" or press Enter
3. Review results in formatted sections

## Configuration

### Environment Variables

```
REACT_APP_BACKEND_URL=http://localhost:5000  # Backend API URL
```

## Troubleshooting

**Backend connection error:**
- Verify backend is running on port 5000
- Check `REACT_APP_BACKEND_URL` in `.env`

**No results displayed:**
- Check browser console for errors
- Verify backend API key configuration

**Styling issues:**
- Ensure Tailwind CSS is compiled
- Clear browser cache

## Scripts

- `npm start` - Development server
- `npm build` - Production build
- `npm test` - Test suite

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Axios Documentation](https://axios-http.com)

---

**Professional Research Intelligence | Frontend**
