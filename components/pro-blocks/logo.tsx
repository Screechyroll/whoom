'use client'

import React from 'react'

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export const Logo: React.FC<LogoProps> = ({
  width = 120,
  height = 36,
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 120 36"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="violetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
    </defs>

    {/* cercle dégradé */}
    <circle cx="18" cy="18" r="18" fill="url(#violetGradient)" />

    {/* texte Whoom en noir */}
    <text
      x="40"
      y="24"
      fill="#000"
      fontFamily="sans-serif"
      fontSize="18"
      fontWeight="bold"
    >
      Whoom
    </text>
  </svg>
)