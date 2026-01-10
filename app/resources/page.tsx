'use client'

import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BookOpen, Download, ExternalLink, FileText, Search } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const resources = [
    {
      category: 'GTM Strategy Documents',
      items: [
        { name: 'Master GTM Plan', type: 'PDF', size: '2.3 MB', download: '#' },
        { name: 'Executive Summary', type: 'PDF', size: '850 KB', download: '#' },
        { name: '6-Month Roadmap', type: 'XLSX', size: '1.2 MB', download: '#' },
        { name: 'Budget Breakdown', type: 'XLSX', size: '450 KB', download: '#' },
      ],
    },
    {
      category: 'Research Reports',
      items: [
        { name: 'Market Analysis Report', type: 'PDF', size: '5.1 MB', download: '#' },
        { name: 'Competitor Analysis', type: 'PDF', size: '3.8 MB', download: '#' },
        { name: 'Customer Interviews', type: 'DOCX', size: '1.1 MB', download: '#' },
        { name: 'Survey Results', type: 'XLSX', size: '2.9 MB', download: '#' },
      ],
    },
    {
      category: 'Presentations',
      items: [
        { name: 'Stakeholder Presentation', type: 'PPTX', size: '8.5 MB', download: '#' },
        { name: 'Training Materials', type: 'PDF', size: '4.2 MB', download: '#' },
      ],
    },
    {
      category: 'Templates & Tools',
      items: [
        { name: 'Email Templates', type: 'ZIP', size: '125 KB', download: '#' },
        { name: 'KPI Tracker', type: 'XLSX', size: '780 KB', download: '#' },
        { name: 'Channel Calculator', type: 'XLSX', size: '520 KB', download: '#' },
      ],
    },
  ]

  // Filter resources based on search query
  const filteredResources = resources.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0)

  const handleDownload = (itemName: string) => {
    // Downloads will be available once resources are stored
    console.log(`Download requested for: ${itemName}`)
  }

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />

      <main className="lg:ml-72">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#11D4D8] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Overview
          </Link>

          {/* Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20">
              Resources
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient-brand">
              Resources & Downloads
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Access all GTM strategy documents, research reports, and supporting materials
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources by name, type, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[#11D4D8]/20 focus:border-[#11D4D8] focus:ring-2 focus:ring-[#11D4D8]/20 outline-none transition-all bg-white shadow-lg"
              />
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-gray-500">
                Found {filteredResources.reduce((acc, s) => acc + s.items.length, 0)} resources matching "{searchQuery}"
              </p>
            )}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map((section) => (
              <Card key={section.category} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#065D7E]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#065D7E]">
                    <div className="p-2 rounded-lg bg-[#065D7E]/10">
                      <BookOpen className="w-5 h-5 text-[#065D7E]" />
                    </div>
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-4 bg-[#F0FBFB] rounded-xl hover:bg-[#e5f5f5] transition-all group"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="p-2 rounded-lg bg-white shadow-sm">
                          <FileText className="w-5 h-5 text-[#11D4D8]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#065D7E]">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            {item.type} • {item.size}
                          </p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleDownload(item.name)}
                        className="bg-gradient-to-r from-[#065D7E] to-[#11D4D8] text-white hover:shadow-lg hover:shadow-[#11D4D8]/30 hover:scale-105 transition-all"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-12 text-center">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#065D7E] mb-2">No resources found</h3>
                <p className="text-gray-500">Try adjusting your search query</p>
              </CardContent>
            </Card>
          )}

          {/* External Links */}
          <Card className="mt-8 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#065D7E]">
                <div className="p-2 rounded-lg bg-[#11D4D8]/10">
                  <ExternalLink className="w-5 h-5 text-[#11D4D8]" />
                </div>
                Quick Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="https://github.com/Mahermenix/alfinder-gtm-presentation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-[#11D4D8]/20 rounded-xl hover:border-[#11D4D8] hover:bg-[#F0FBFB] transition-all group"
                >
                  <div className="p-2 rounded-lg bg-[#065D7E]/10 group-hover:bg-[#065D7E]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#065D7E]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-1.475-3.795-1.475-.51-1.29-1.245-1.635-1.245-1.635-1.02-.695.075-.68.075-.68 1.125.075 1.71 1.155 1.71 1.155 1.005 1.71 2.61 1.215 3.405.93.105-.75.405-1.41.855-1.735-3.195-3.21-7.02-3.21-12.735 0-5.16 3.735-9.375 9.375-9.375 5.16 0 9.375 3.735 9.375 9.375 0 5.715-3.795 9.375-9.375 9.375-.915 0-1.78-.135-2.565-.405.57-1.77.255-3.45.405-3.765.075-.225.405-.87 1.605-1.08 0-.39.015-1.395.015-2.825-6.78.735-11.19-6.78-11.19z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#065D7E]">GitHub Repository</p>
                    <p className="text-sm text-gray-500">Source code & documentation</p>
                  </div>
                </Link>
                <Link
                  href="/gtm"
                  className="flex items-center gap-3 p-4 border border-[#11D4D8]/20 rounded-xl hover:border-[#11D4D8] hover:bg-[#F0FBFB] transition-all group"
                >
                  <div className="p-2 rounded-lg bg-[#11D4D8]/10 group-hover:bg-[#11D4D8]/20 transition-colors">
                    <ExternalLink className="w-5 h-5 text-[#11D4D8]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#065D7E]">GTM Presentation</p>
                    <p className="text-sm text-gray-500">View the presentation</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-8 bg-white border border-[#11D4D8]/20 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#11D4D8]/20">
                  <Download className="w-5 h-5 text-[#11D4D8]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#065D7E] mb-1">Resource Access</p>
                  <p className="text-sm text-gray-600">
                    All resources are stored in the <code className="bg-white px-2 py-0.5 rounded text-[#11D4D8]">_bmad-output</code> directory.
                    Download buttons will be activated once the files are organized and made accessible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
