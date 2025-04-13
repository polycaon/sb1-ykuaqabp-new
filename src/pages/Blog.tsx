import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "How to Choose the Right MBA Program",
    excerpt: "Factors to consider when selecting an MBA program that aligns with your career goals and budget.",
    date: "2025-03-15",
    author: "MBA Expert",
    readTime: "5 min read",
    slug: "how-to-choose-mba-program"
  },
  {
    title: "Understanding MBA ROI Across Different Countries",
    excerpt: "A comprehensive analysis of MBA return on investment in various global markets.",
    date: "2025-03-10",
    author: "Finance Analyst",
    readTime: "7 min read",
    slug: "mba-roi-analysis"
  },
  {
    title: "Top MBA Trends in 2025",
    excerpt: "Latest trends shaping the MBA education landscape and what it means for prospective students.",
    date: "2025-03-05",
    author: "Education Researcher",
    readTime: "6 min read",
    slug: "mba-trends-2025"
  }
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">MBA Insights Blog</h1>
      
      <div className="grid gap-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <span>{post.readTime}</span>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {post.title}
            </h2>
            
            <p className="text-gray-600 mb-4">
              {post.excerpt}
            </p>
            
            <button className="inline-flex items-center text-blue-600 hover:text-blue-800">
              Read more
              <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}