import React from 'react';
// Import the original MDX components
import MDXComponents from '@theme-original/MDXComponents';
import Mermaid from '@site/src/components/Mermaid';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map custom components
  mermaid: Mermaid,
};
