import React, { useEffect } from 'react';
import mermaid from 'mermaid';

// Initialize mermaid with default configuration
mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: 'sans-serif',
});

export default function Mermaid({ chart }) {
  useEffect(() => {
    mermaid.contentLoaded();
  }, [chart]);

  return (
    <div className="mermaid">
      {chart}
    </div>
  );
}
