'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  Home,
  Target,
  Search as SearchIcon,
  PieChart,
  BookOpen,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react'
import { LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { GlobalSearch } from '@/components/global-search'

interface NavItem {
  name: string
  href: string
  icon: LucideIcon
  children?: { name: string; href: string }[]
}

const navigation: NavItem[] = [
  {
    name: 'Overview',
    href: '/',
    icon: Home,
  },
  {
    name: 'GTM Strategy',
    href: '/gtm',
    icon: Target,
    children: [
      { name: '1. Target Audience', href: '/gtm/story-01-target-audience' },
      { name: '2. Conversion Funnel', href: '/gtm/story-02-conversion-funnel' },
      { name: '3. Channel Strategy', href: '/gtm/story-03-channel-strategy' },
      { name: '4. Lead Generation', href: '/gtm/story-04-lead-generation' },
      { name: '5. Budget & ROI', href: '/gtm/story-05-budget-roi' },
      { name: '6. Timeline & KPIs', href: '/gtm/story-06-timeline-kpis' },
      { name: '7. Master Plan', href: '/gtm/story-07-master-plan' },
    ],
  },
  {
    name: 'Research',
    href: '/research',
    icon: SearchIcon,
    children: [
      { name: 'Market Research', href: '/research/market-research' },
      { name: 'Competitor Analysis', href: '/research/competitors' },
      { name: 'Alfinder Analysis', href: '/research/allaboutalfinder' },
      { name: 'Partnerships', href: '/research/partnerships' },
    ],
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: PieChart,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button - Futuristic style */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className={cn(
          "lg:hidden fixed top-4 left-4 z-50 p-3 rounded-2xl",
          "bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300",
          "hover:scale-105 active:scale-95"
        )}
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X size={24} className="text-[#065D7E]" /> : <Menu size={24} className="text-[#065D7E]" />}
      </button>

      {/* Sidebar - Always visible on desktop, toggle on mobile */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-40 h-screen w-80 transition-all duration-500 ease-out',
          'bg-white border-r border-gray-200 shadow-lg',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header - Logo and Brand */}
          <div className="relative p-6 pb-4">
            <div className="flex flex-col items-center">
              <Link href="/" className="flex flex-col items-center gap-3 group">
                {/* Logo - No box, just the logo with space */}
                <div className="relative w-16 h-16">
                  <Image
                    src="https://alfinder.ai/dist/img/logo.png"
                    alt="Alfinder Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                {/* Brand Text - Under the logo */}
                <div className="space-y-0.5 text-center">
                  <p className="text-sm font-semibold text-[#065D7E]">GTM STRATEGY</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="px-4 pb-4">
            <GlobalSearch />
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-2">
            {navigation.map((section) => {
              const isActive = pathname === section.href || pathname?.startsWith(section.href + '/')
              const Icon = section.icon

              return (
                <div key={section.name} className="animate-slide-in">
                  <Link
                    href={section.href}
                    className={cn(
                      'relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group',
                      'hover:scale-[1.02] active:scale-[0.98]',
                      isActive
                        ? 'bg-gradient-to-r from-[#065D7E] to-[#11D4D8] text-white shadow-lg shadow-[#11D4D8]/30'
                        : 'hover:bg-[#F0FBFB] text-[#065D7E] hover:text-[#11D4D8]'
                    )}
                  >
                    <Icon
                      size={20}
                      className={cn(
                        'flex-shrink-0 transition-colors',
                        isActive ? 'text-white' : 'text-[#11D4D8]'
                      )}
                    />
                    <span className="font-medium text-sm">{section.name}</span>
                    {section.children && (
                      <ChevronRight
                        size={16}
                        className={cn(
                          'ml-auto transition-transform duration-300',
                          isActive && 'rotate-90'
                        )}
                      />
                    )}

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                    )}
                  </Link>

                  {/* Children */}
                  {section.children && (
                    <div className={cn(
                      'ml-8 mt-1 space-y-1 overflow-hidden transition-all duration-500',
                      isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    )}>
                      {section.children.map((child) => {
                        const isChildActive = pathname === child.href
                        return (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2 rounded-lg text-sm transition-all duration-200',
                              'hover:pl-5 hover:bg-[#F0FBFB]',
                              isChildActive
                                ? 'text-[#11D4D8] font-semibold bg-[#F0FBFB]'
                                : 'text-gray-500 hover:text-[#065D7E]'
                            )}
                          >
                            {child.name}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Footer - GitHub Link */}
          <div className="p-4 border-t border-[#11D4D8]/10">
            <a
              href="https://github.com/Mahermenix/alfinder-gtm-presentation"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium',
                'transition-all duration-300 hover:scale-[1.02]',
                'hover:bg-[#F0FBFB] text-[#065D7E] hover:text-[#11D4D8]'
              )}
            >
              <ExternalLink size={16} className="text-[#11D4D8]" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        {/* Decorative glow effect */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-[#11D4D8]/5 rounded-full blur-3xl pointer-events-none" />
      </aside>

      {/* Mobile overlay - Glass effect */}
      {isMobileOpen && (
        <div
          className={cn(
            "fixed inset-0 z-30 lg:hidden animate-fade-in",
            "bg-[#065D7E]/20 backdrop-blur-sm"
          )}
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  )
}
