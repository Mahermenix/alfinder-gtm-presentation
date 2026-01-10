'use client'

import { useState, useEffect, useRef } from 'react'
import { Search as SearchIcon, X, FileText, BookOpen, Target, PieChart, ArrowRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface SearchResult {
  id: string
  title: string
  description: string
  href: string
  type: 'page' | 'story' | 'research'
  iconName: 'Home' | 'Target' | 'BookOpen' | 'PieChart' | 'FileText'
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Home,
  Target,
  BookOpen,
  PieChart,
  FileText,
}

// All pages and content for search
const searchContent: SearchResult[] = [
  // Main Pages
  { id: 'home', title: 'Overview', description: 'Executive summary and key metrics', href: '/', type: 'page', iconName: 'Home' },
  { id: 'gtm', title: 'GTM Strategy Presentation', description: 'Complete go-to-market strategy slides', href: '/gtm', type: 'page', iconName: 'Target' },
  { id: 'research', title: 'Research', description: 'Market research and analysis', href: '/research', type: 'page', iconName: 'BookOpen' },
  { id: 'visualizations', title: 'Visualizations', description: 'Charts and diagrams', href: '/visualizations', type: 'page', iconName: 'PieChart' },
  { id: 'resources', title: 'Resources & Downloads', description: 'Documents and templates', href: '/resources', type: 'page', iconName: 'FileText' },

  // GTM Stories
  { id: 'story-1', title: '1. Target Audience', description: 'Ideal customer profiles and segments', href: '/gtm/story-01-target-audience', type: 'story', iconName: 'Target' },
  { id: 'story-2', title: '2. Conversion Funnel', description: 'Customer journey optimization', href: '/gtm/story-02-conversion-funnel', type: 'story', iconName: 'Target' },
  { id: 'story-3', title: '3. Channel Strategy', description: 'Acquisition channels overview', href: '/gtm/story-03-channel-strategy', type: 'story', iconName: 'Target' },
  { id: 'story-4', title: '4. Lead Generation', description: 'Lead generation tactics', href: '/gtm/story-04-lead-generation', type: 'story', iconName: 'Target' },
  { id: 'story-5', title: '5. Budget & ROI', description: 'Financial projections', href: '/gtm/story-05-budget-roi', type: 'story', iconName: 'Target' },
  { id: 'story-6', title: '6. Timeline & KPIs', description: 'Execution roadmap', href: '/gtm/story-06-timeline-kpis', type: 'story', iconName: 'Target' },
  { id: 'story-7', title: '7. Master Plan', description: 'Complete GTM strategy', href: '/gtm/story-07-master-plan', type: 'story', iconName: 'Target' },

  // Research Categories
  { id: 'market-research', title: 'Market Research', description: 'Industry analysis and trends', href: '/research/market-research', type: 'research', iconName: 'BookOpen' },
  { id: 'competitors', title: 'Competitor Analysis', description: 'Competitive landscape', href: '/research/competitors', type: 'research', iconName: 'BookOpen' },
  { id: 'allaboutalfinder', title: 'Alfinder Analysis', description: 'Product deep dive', href: '/research/allaboutalfinder', type: 'research', iconName: 'BookOpen' },
  { id: 'partnerships', title: 'Partnerships', description: 'Strategic partnerships', href: '/research/partnerships', type: 'research', iconName: 'BookOpen' },
]

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Filter results based on query
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([])
      return
    }

    const filtered = searchContent.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filtered)
  }, [query])

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Keyboard shortcut to open search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
        setTimeout(() => inputRef.current?.focus(), 100)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const getIconForType = (type: string) => {
    switch (type) {
      case 'page': return FileText
      case 'story': return Target
      case 'research': return BookOpen
      default: return FileText
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'page': return 'Page'
      case 'story': return 'GTM Story'
      case 'research': return 'Research'
      default: return 'Content'
    }
  }

  return (
    <div ref={searchRef} className="relative">
      {/* Search Button/Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "w-full flex items-center gap-3 px-4 py-3 rounded-xl",
          "bg-[#F0FBFB] border border-[#11D4D8]/20",
          "text-gray-500 text-sm",
          "hover:bg-white hover:border-[#11D4D8]/40 hover:text-[#065D7E]",
          "transition-all duration-200"
        )}
      >
        <SearchIcon className="w-4 h-4 flex-shrink-0" />
        <span className="flex-1 text-left">Search...</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-400 bg-gray-100 rounded">
          <span>⌘</span>K
        </kbd>
      </button>

      {/* Search Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-32 px-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl shadow-[#065D7E]/20 border border-[#11D4D8]/20 overflow-hidden animate-fade-in">
            {/* Search Input */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-[#11D4D8]/10">
              <SearchIcon className="w-5 h-5 text-[#11D4D8]" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, stories, research..."
                className="flex-1 text-lg outline-none text-[#065D7E] placeholder:text-gray-400"
                autoFocus
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-400 bg-gray-100 rounded">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto p-2">
              {query.length < 2 ? (
                <div className="py-12 text-center">
                  <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Start typing to search...</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Search for pages, GTM stories, and research documents
                  </p>
                </div>
              ) : results.length === 0 ? (
                <div className="py-12 text-center">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">No results found</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Try different keywords or check your spelling
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    {results.length} result{results.length !== 1 ? 's' : ''} found
                  </p>
                  {results.map((result) => {
                    const Icon = iconMap[result.iconName]
                    return (
                      <Link
                        key={result.id}
                        href={result.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-start gap-4 px-4 py-3 rounded-xl hover:bg-[#F0FBFB] transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-[#065D7E]/10 group-hover:bg-[#065D7E]/20 transition-colors flex-shrink-0">
                          <Icon className="w-4 h-4 text-[#065D7E]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-[#065D7E] truncate">{result.title}</p>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#11D4D8]/10 text-[#11D4D8]">
                              {getTypeLabel(result.type)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 truncate">{result.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#11D4D8] transition-colors flex-shrink-0 mt-1" />
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-[#11D4D8]/10 bg-[#F0FBFB]/50">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span><kbd className="px-1.5 py-0.5 bg-white rounded border">↑↓</kbd> Navigate</span>
                  <span><kbd className="px-1.5 py-0.5 bg-white rounded border">↵</kbd> Select</span>
                  <span><kbd className="px-1.5 py-0.5 bg-white rounded border">ESC</kbd> Close</span>
                </div>
                <span>⌘K to open</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
