"use client"
import { useState } from 'react';

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Ensure `children` is a string before calling slice
  const textContent = typeof children === 'string' ? children : '';
  const displayText = isExpanded ? textContent : textContent.slice(0, 100) + '...';

  return (
    <span>
      {displayText}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </span>
  );
}

export default TextExpander;
