'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  Home,
  Target,
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  FileText,
  Search,
  BookOpen,
  PieChart,
  CheckSquare,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
  {
    name: 'Overview',
    href: '/',
    icon: Home,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-40 h-screen transition-all duration-300',
          'bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800',
          isCollapsed ? 'w-16' : 'w-72',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full',
          'lg:translate-x-0'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            {!isCollapsed && (
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Alfinder
                </h1>
                <p className="text-xs text-muted-foreground">GTM Strategy</p>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-6">
            {navigation.map((section) => (
              <div key={section.name}>
                <Link
                  href={section.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    'hover:bg-gray-100 dark:hover:bg-gray-800',
                    pathname === section.href || pathname?.startsWith(section.href + '/')
                      ? 'bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 text-primary'
                      : 'text-gray-700 dark:text-gray-300'
                  )}
                >
                  <section.icon size={20} />
                  {!isCollapsed && <span>{section.name}</span>}
                </Link>

                {section.children && !isCollapsed && (
                  <div className="ml-8 mt-2 space-y-1">
                    {section.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={cn(
                          'block px-3 py-1.5 rounded-lg text-sm transition-colors',
                          'hover:bg-gray-100 dark:hover:bg-gray-800',
                          pathname === child.href
                            ? 'text-primary font-medium'
                            : 'text-gray-600 dark:text-gray-400'
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer */}
          {!isCollapsed && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              >
                <ExternalLink size={16} />
                <span>View on GitHub</span>
              </a>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  )
}
