'use client';

import React, { useState } from 'react';

interface PromptDisplayProps {
  prompt: string;
}

export const PromptDisplay: React.FC<PromptDisplayProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    if (!prompt) return;
    
    navigator.clipboard.writeText(prompt)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  
  if (!prompt) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Generated Prompt</h2>
        <p className="text-gray-500 dark:text-gray-400 italic">
          Your generated prompt will appear here. Select options and click &quot;Generate Prompt&quot;.
        </p>
      </div>
    );
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Generated Prompt</h2>
        <button
          onClick={copyToClipboard}
          className="flex items-center px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors"
        >
          {copied ? (
            <>
              <span className="text-green-600 dark:text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-900 rounded-md p-4 mb-4">
        <p className="text-gray-800 dark:text-gray-200 break-words">{prompt}</p>
      </div>
      
      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>Ready to use with AI image generators like DALL-E, Midjourney, or Stable Diffusion.</p>
      </div>
    </div>
  );
};