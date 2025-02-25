'use client';

import React from 'react';

interface PromptHistoryProps {
  prompts: string[];
  onSelectPrompt: (prompt: string) => void;
}

export const PromptHistory: React.FC<PromptHistoryProps> = ({ prompts, onSelectPrompt }) => {
  if (prompts.length === 0) {
    return null;
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Prompts</h2>
      
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {prompts.map((prompt, index) => (
          <div 
            key={index} 
            className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={() => onSelectPrompt(prompt)}
          >
            <p className="text-gray-800 dark:text-gray-200 text-sm line-clamp-2">{prompt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};