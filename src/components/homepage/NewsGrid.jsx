// src/components/homepage/NewsGrid.jsx
import React from "react";

/**
 * NewsGrid
 * Expects: articles: Array<{category,date,title,description?,image}>
 * Renders: 1 big, 2 medium, 4 small layout
 */
export default function NewsGrid({ articles = [] }) {
  const top1 = articles[0] ? [articles[0]] : [];
  const mid2 = articles.slice(1, 3);
  const low4 = articles.slice(3, 7);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <h2 className="text-4xl font-bold mb-8">News</h2>

      {/* 1 big */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        {top1.map((article, i) => (
          <a
            href="#"
            key={`top-${i}`}
            className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow overflow-hidden grid md:grid-cols-2"
          >
            <div className="relative">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="p-6">
              <p className="text-xs text-gray-500 uppercase tracking-wide">{article.category}</p>
              <p className="text-xs text-gray-500 mb-2">{article.date}</p>
              <h3 className="text-2xl font-normal mb-3">{article.title}</h3>
              {article.description && (
                <p className="text-gray-700 text-sm leading-relaxed">{article.description}</p>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* 2 medium */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {mid2.map((article, i) => (
          <a
            href="#"
            key={`mid-${i}`}
            className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col md:flex-row"
          >
            <div className="relative md:w-1/2">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="p-5 md:w-1/2">
              <p className="text-xs text-gray-500 uppercase tracking-wide">{article.category}</p>
              <p className="text-xs text-gray-500 mb-2">{article.date}</p>
              <h3 className="text-xl font-normal mb-2">{article.title}</h3>
              {article.description && (
                <p className="text-gray-600 text-sm">{article.description}</p>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* 4 small */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {low4.map((article, i) => (
          <a
            href="#"
            key={`low-${i}`}
            className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img src={article.image} alt={article.title} className="w-full h-44 object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="p-4">
              <p className="text-[11px] text-gray-500 uppercase tracking-wide">{article.category}</p>
              <p className="text-[11px] text-gray-500 mb-2">{article.date}</p>
              <h3 className="text-base font-normal mb-1">{article.title}</h3>
            </div>
          </a>
        ))}
      </div>

      {/* See more news */}
      <div className="text-center mt-10">
        <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
          <span>See more news</span>
          {/* inline arrow icon (no external import needed) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
