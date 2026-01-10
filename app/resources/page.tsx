import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, BookOpen, Download, ExternalLink, FileText } from 'lucide-react'
import Link from 'next/link'

export default function ResourcesPage() {
  const resources = [
    {
      category: 'GTM Strategy Documents',
      items: [
        { name: 'Master GTM Plan', type: 'PDF', size: '2.3 MB' },
        { name: 'Executive Summary', type: 'PDF', size: '850 KB' },
        { name: '6-Month Roadmap', type: 'XLSX', size: '1.2 MB' },
        { name: 'Budget Breakdown', type: 'XLSX', size: '450 KB' },
      ],
    },
    {
      category: 'Research Reports',
      items: [
        { name: 'Market Analysis Report', type: 'PDF', size: '5.1 MB' },
        { name: 'Competitor Analysis', type: 'PDF', size: '3.8 MB' },
        { name: 'Customer Interviews', type: 'DOCX', size: '1.1 MB' },
        { name: 'Survey Results', type: 'XLSX', size: '2.9 MB' },
      ],
    },
    {
      category: 'Presentations',
      items: [
        { name: 'Stakeholder Presentation', type: 'PPTX', size: '8.5 MB' },
        { name: 'Training Materials', type: 'PDF', size: '4.2 MB' },
      ],
    },
    {
      category: 'Templates & Tools',
      items: [
        { name: 'Email Templates', type: 'ZIP', size: '125 KB' },
        { name: 'KPI Tracker', type: 'XLSX', size: '780 KB' },
        { name: 'Channel Calculator', type: 'XLSX', size: '520 KB' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Sidebar />

      <main className="lg:ml-72">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Overview
          </Link>

          {/* Header */}
          <div className="mb-8">
            <Badge className="mb-4" variant="gradient">
              Resources
            </Badge>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Resources & Downloads
            </h1>
            <p className="text-xl text-muted-foreground">
              Access all GTM strategy documents, research reports, and supporting materials
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((section) => (
              <Card key={section.category} className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-500" />
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <FileText className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.type} • {item.size}
                          </p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-white rounded-md transition-colors">
                        <Download className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* External Links */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-primary" />
                Quick Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="https://github.com/Mahermenix/alfinder-gtm-presentation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border rounded-lg hover:border-primary transition-colors"
                >
                  <GitHub className="w-5 h-5" />
                  <div>
                    <p className="font-medium">GitHub Repository</p>
                    <p className="text-sm text-muted-foreground">Source code & documentation</p>
                  </div>
                </Link>
                <Link
                  href="https://gtm-presentation.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border rounded-lg hover:border-primary transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Live Website</p>
                    <p className="text-sm text-muted-foreground">View the presentation</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-8 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
            <CardContent className="p-6">
              <p className="text-sm font-medium mb-2">💾 Resource Access</p>
              <p className="text-sm text-muted-foreground">
                All resources are stored in the <code className="bg-gray-100 px-1 py-0.5 rounded">_bmad-output</code> directory.
                Download buttons will be activated once the files are organized and made accessible.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function GitHub({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-1.475-3.795-1.475-.51-1.29-1.245-1.635-1.245-1.635-1.02-.695.075-.68.075-.68 1.125.075 1.71 1.155 1.71 1.155 1.005 1.71 2.61 1.215 3.405.93.105-.75.405-1.41.855-1.735-3.195-3.21-7.02-3.21-12.735 0-5.16 3.735-9.375 9.375-9.375 5.16 0 9.375 3.735 9.375 9.375 0 5.715-3.795 9.375-9.375 9.375-.915 0-1.78-.135-2.565-.405.57-1.77.255-3.45.405-3.765.075-.225.405-.87 1.605-1.08 0-.39.015-1.395.015-2.825-6.78.735-11.19-6.78-11.19z" />
    </svg>
  )
}
