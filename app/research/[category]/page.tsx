import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, FileText, Search } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import { MarkdownRenderer } from '@/components/markdown-renderer'

async function getContent() {
  const contentPath = path.join(process.cwd(), 'app', 'data', 'content.json')
  const fileContent = fs.readFileSync(contentPath, 'utf-8')
  return JSON.parse(fileContent)
}

const researchCategories: Record<string, { title: string; description: string; count: number }> = {
  'market-research': {
    title: 'Market Research',
    description: 'Comprehensive analysis of the MENA e-commerce market, search technology trends, and merchant needs.',
    count: 14,
  },
  'competitors': {
    title: 'Competitor Analysis',
    description: 'In-depth analysis of 13 key competitors including Algolia, Lableb, and other search solutions.',
    count: 13,
  },
  'allaboutalfinder': {
    title: 'Alfinder Deep Dive',
    description: '18 comprehensive studies analyzing Alfinder\'s current position, strengths, and opportunities.',
    count: 18,
  },
  'partnerships': {
    title: 'Partnership Opportunities',
    description: 'Strategic partnership opportunities with Salla, Zid, payment gateways, and digital agencies.',
    count: 10,
  },
}

export default async function ResearchPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const researchCategory = researchCategories[category]
  const content = await getContent()

  // Filter research files by slug prefix based on category
  const categoryPrefixes: Record<string, string[]> = {
    'market-research': ['market-research/', 'research/market'],
    'competitors': ['competitors/'],
    'allaboutalfinder': ['allaboutalfinder/'],
    'partnerships': ['partnerships/', 'research/market-collaboration', 'competitors/12-'],
  }

  const prefixes = categoryPrefixes[category] || []
  const researchFiles = (content.research as any[]).filter((file: any) =>
    prefixes.some(prefix => file.slug.startsWith(prefix))
  )

  if (!researchCategory) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Sidebar />

      <main className="lg:ml-72">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              Research
            </Badge>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-transparent">
              {researchCategory.title}
            </h1>
            <p className="text-xl text-muted-foreground">{researchCategory.description}</p>
            <p className="text-sm text-muted-foreground mt-2">
              {researchCategory.count} research files
            </p>
          </div>

          {/* Research Files */}
          {researchFiles.length > 0 ? (
            <div className="space-y-6">
              {researchFiles.map((file: any, index: number) => (
                <Card key={file.slug || index} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5">
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      {file.title || file.slug}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <MarkdownRenderer content={file.content} />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 font-medium mb-2">📚 Research Archive</p>
                <p className="text-blue-700 text-sm">
                  No research files found in this category.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Quick Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {Object.entries(researchCategories).map(([key, cat]) => (
              <Link
                key={key}
                href={`/research/${key}`}
                className={`block p-4 rounded-lg border-2 transition-all ${
                  key === category
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-primary/50'
                }`}
              >
                <p className="text-sm font-medium mb-1">{cat.title}</p>
                <p className="text-xs text-muted-foreground">{cat.count} files</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(researchCategories).map((category) => ({
    category,
  }))
}
