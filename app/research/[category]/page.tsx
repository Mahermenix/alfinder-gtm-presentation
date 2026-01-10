import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, FileText, Search } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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

export default function ResearchPage({ params }: { params: { category: string } }) {
  const category = researchCategories[params.category]

  if (!category) {
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
              {category.title}
            </h1>
            <p className="text-xl text-muted-foreground">{category.description}</p>
            <p className="text-sm text-muted-foreground mt-2">
              {category.count} research files
            </p>
          </div>

          {/* Content Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Research Content
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 font-medium mb-2">📚 Research Archive</p>
                <p className="text-blue-700 text-sm">
                  This category contains {category.count} research files from{' '}
                  <code className="bg-blue-100 px-1 py-0.5 rounded">
                    _bmad-output/planning-artifacts/{params.category}/
                  </code>
                </p>
                <p className="text-blue-700 text-sm mt-2">
                  Individual research files will be listed here with full markdown content.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Research Files</h3>
                <div className="grid grid-cols-1 gap-3">
                  {Array.from({ length: Math.min(category.count, 5) }).map((_, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <Search className="w-5 h-5 text-primary mt-0.5" />
                        <div className="flex-1">
                          <p className="font-medium">Research File {i + 1}</p>
                          <p className="text-sm text-muted-foreground">
                            Analysis and findings from the research study
                          </p>
                        </div>
                        <Badge variant="outline">MD</Badge>
                      </div>
                    </Link>
                  ))}
                  {category.count > 5 && (
                    <div className="text-center py-4 text-sm text-muted-foreground">
                      + {category.count - 5} more files
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {Object.entries(researchCategories).map(([key, cat]) => (
              <Link
                key={key}
                href={`/research/${key}`}
                className={`block p-4 rounded-lg border-2 transition-all ${
                  key === params.category
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
