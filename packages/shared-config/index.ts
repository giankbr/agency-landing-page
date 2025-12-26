/**
 * Shared configuration and utilities for the Sengiku monorepo
 */

export const siteConfig = {
  name: 'Sengiku Studio',
  description: 'Premium web development agency building scalable digital experiences.',
  url: 'https://sengiku.studio',
  ogImage: '/og-image.jpg',
} as const;

export const colors = {
  background: '#F6F7F8',
  surface: '#FFFFFF',
  primary: '#0A0A0A',
  accent: '#E1443A',
  border: '#EBECEF',
} as const;
