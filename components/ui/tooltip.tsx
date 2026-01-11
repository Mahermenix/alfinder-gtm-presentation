'use client'

import { useState } from 'react'
import { Info } from 'lucide-react'
import { cn } from '@/lib/utils'

interface InfoTooltipProps {
  content: string
  className?: string
}

export function InfoTooltip({ content, className }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className={cn('relative inline-block ml-1.5', className)}>
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        className="text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="More information"
      >
        <Info className="w-4 h-4" />
      </button>

      {isVisible && (
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-sm text-gray-700">
          <div className="relative">
            {/* Arrow */}
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white border-l border-b border-gray-200 transform rotate-45" />
            <p>{content}</p>
          </div>
        </div>
      )}
    </div>
  )
}
