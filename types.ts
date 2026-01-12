import React from 'react';

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string; // Tailwind icon class name or emoji
}

export interface SocialLink {
  platform: string;
  url: string;
  // Fix: Imported React to provide the namespace for ReactNode
  icon: React.ReactNode;
}
