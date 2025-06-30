import React from 'react';

interface SocialButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          justifyContent: 'center',
          width: '300px'
        }}
      >
        {children}
      </button>
    </a>
  );
} 