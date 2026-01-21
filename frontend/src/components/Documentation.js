import React from 'react';

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{backgroundColor: '#1B1B1B'}}>
      {/* Main Content */}
      <div className="flex-1 px-4 py-12">
        <div className="w-full max-w-5xl mx-auto">
          {/* Documentation Card */}
          <div className="rounded-3xl shadow-2xl overflow-hidden" style={{backgroundColor: '#1B1B1B', border: '1px solid #4442C8'}}>
            {/* Header Section */}
            <div className="px-12 py-16 relative overflow-hidden" style={{backgroundColor: '#4442C8'}}>
              <div className="relative z-10">
                <h1 className="font-bold text-white mb-4 tracking-tight leading-tight" style={{fontSize: '48px'}}>
                  Documentation
                </h1>
                <p className="text-white font-light leading-relaxed max-w-2xl opacity-95" style={{fontSize: '16px'}}>
                  Learn how to use ResearchIQ to its fullest potential
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-12" style={{backgroundColor: '#1B1B1B'}}>
              {/* Getting Started */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4" style={{color: '#4442C8'}}>Getting Started</h2>
                <p className="text-white leading-relaxed mb-4" style={{fontSize: '16px'}}>
                  ResearchIQ is an AI-powered research assistant that helps you analyze topics and find verified sources. Simply enter your research topic and let the AI do the analysis.
                </p>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4" style={{color: '#4442C8'}}>Features</h2>
                <ul className="space-y-3" style={{fontSize: '16px'}}>
                  <li className="text-white flex gap-3">
                    <span style={{color: '#4442C8'}}>•</span>
                    <span>AI-powered research analysis with comprehensive insights</span>
                  </li>
                  <li className="text-white flex gap-3">
                    <span style={{color: '#4442C8'}}>•</span>
                    <span>Multiple source filters (All Sources, Research Papers, Journals, News, Academic)</span>
                  </li>
                  <li className="text-white flex gap-3">
                    <span style={{color: '#4442C8'}}>•</span>
                    <span>Verified source references for all research results</span>
                  </li>
                  <li className="text-white flex gap-3">
                    <span style={{color: '#4442C8'}}>•</span>
                    <span>Institutional-grade intelligence for professional research</span>
                  </li>
                </ul>
              </div>

              {/* How to Use */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4" style={{color: '#4442C8'}}>How to Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-semibold mb-2" style={{fontSize: '16px'}}>1. Enter Your Research Topic</h3>
                    <p className="text-white" style={{fontSize: '16px'}}>Type your research inquiry in the input field. Be as specific as possible for better results.</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2" style={{fontSize: '16px'}}>2. Select Source Filter (Optional)</h3>
                    <p className="text-white" style={{fontSize: '16px'}}>Choose from various source types to narrow down your search results to specific categories.</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2" style={{fontSize: '16px'}}>3. Click "Analyze Now"</h3>
                    <p className="text-white" style={{fontSize: '16px'}}>The AI will analyze your topic and provide comprehensive research results.</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2" style={{fontSize: '16px'}}>4. Review Results and Sources</h3>
                    <p className="text-white" style={{fontSize: '16px'}}>Check the research results and click "Show Sources" to view verified references.</p>
                  </div>
                </div>
              </div>

              {/* Source Filters */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4" style={{color: '#4442C8'}}>Source Filters</h2>
                <div className="space-y-3" style={{fontSize: '16px'}}>
                  <div>
                    <p className="text-white font-semibold">All Sources</p>
                    <p className="text-white opacity-75">Search across all available sources</p>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Research Papers</p>
                    <p className="text-white opacity-75">Focus on academic research papers and publications</p>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Journals</p>
                    <p className="text-white opacity-75">Search peer-reviewed journal articles</p>
                  </div>
                  <div>
                    <p className="text-white font-semibold">News</p>
                    <p className="text-white opacity-75">Find recent news and current events</p>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Academic</p>
                    <p className="text-white opacity-75">Academic resources and educational content</p>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4" style={{color: '#4442C8'}}>Tips for Best Results</h2>
                <ul className="space-y-3" style={{fontSize: '16px'}}>
                  <li className="text-white flex gap-3">
                    <span style={{color: '#4442C8'}}>•</span>
                    <span>Be specific with your research queries for more accurate results</span>
                  </li>
                  <li className="text-white flex gap-3">
                    <span style={{color: '#4442C8'}}>•</span>
                    <span>Use source filters to refine your search by category</span>
                  </li>
                  <li className="text-white flex gap-3">
                    <span style={{color: '#4442C8'}}>•</span>
                    <span>Always verify sources for academic or professional work</span>
                  </li>
                  <li className="text-white flex gap-3">
                    <span style={{color: '#4442C8'}}>•</span>
                    <span>Press Enter or click "Analyze Now" to start your research</span>
                  </li>
                </ul>
              </div>
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

export default Documentation;
