import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Github size={20} />,
    href: 'https://github.com/yourusername',
    label: 'GitHub'
  },
  {
    icon: <Twitter size={20} />,
    href: 'https://twitter.com/yourusername',
    label: 'Twitter'
  },
  {
    icon: <Linkedin size={20} />,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn'
  }
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}