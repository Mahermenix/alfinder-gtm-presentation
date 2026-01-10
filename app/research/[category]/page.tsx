import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, FileText, Search, TrendingUp, Users, BarChart3, Target, Award, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react'
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

// Synthesis story slug for each category
const synthesisStories: Record<string, string> = {
  'market-research': 'market-research/14-market-research-synthesis',
  'competitors': 'competitors/10-competitive-landscape-synthesis',
  'allaboutalfinder': 'allaboutalfinder/14-alfinder-synthesis',
  'partnerships': 'partnerships/10-enterprise-software',
}

const researchCategories: Record<string, { title: string; description: string; count: number; icon: any }> = {
  'market-research': {
    title: 'Market Research',
    description: 'Comprehensive analysis of the MENA e-commerce market, search technology trends, and merchant needs.',
    count: 16,
    icon: TrendingUp,
  },
  'competitors': {
    title: 'Competitor Analysis',
    description: 'In-depth analysis of key competitors including Algolia, Lableb, and other search solutions.',
    count: 14,
    icon: Users,
  },
  'allaboutalfinder': {
    title: 'Alfinder Deep Dive',
    description: 'Comprehensive studies analyzing Alfinder\'s current position, strengths, and opportunities.',
    count: 21,
    icon: Target,
  },
  'partnerships': {
    title: 'Partnership Opportunities',
    description: 'Strategic partnership opportunities with Salla, Zid, payment gateways, and digital agencies.',
    count: 13,
    icon: Award,
  },
}

const categoryColors: Record<string, { from: string; to: string; accent: string }> = {
  'market-research': { from: 'from-blue-500', to: 'to-cyan-500', accent: 'text-blue-600' },
  'competitors': { from: 'from-red-500', to: 'to-orange-500', accent: 'text-red-600' },
  'allaboutalfinder': { from: 'from-purple-500', to: 'to-pink-500', accent: 'text-purple-600' },
  'partnerships': { from: 'from-green-500', to: 'to-emerald-500', accent: 'text-green-600' },
}

// Extract key metrics from synthesis content
function extractMetrics(content: string) {
  const metrics: { label: string; value: string; icon: any }[] = []

  // Extract dollar values with B, M, K suffixes
  const dollarMatches = content.match(/\$\{0,1}\d+[BMK]-?\d*\s*(Billion|Million|Thousand)?/gi)
  if (dollarMatches) {
    dollarMatches.slice(0, 4).forEach((match, idx) => {
      const icons = [BarChart3, TrendingUp, Target, Award]
      metrics.push({ label: 'Market Metric', value: match, icon: icons[idx % icons.length] })
    })
  }

  // Extract percentage values
  const percentMatches = content.match(/\d+%/g)
  if (percentMatches) {
    percentMatches.slice(0, 3).forEach((match, idx) => {
      metrics.push({ label: 'Growth Rate', value: match, icon: TrendingUp })
    })
  }

  return metrics
}

export default async function ResearchPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const researchCategory = researchCategories[category]
  const colors = categoryColors[category] || categoryColors['market-research']
  const CategoryIcon = researchCategory.icon

  if (!researchCategory) {
    notFound()
  }

  const content = await getContent()

  // Filter research files by slug prefix based on category
  const categoryPrefixes: Record<string, string[]> = {
    'market-research': ['market-research/', 'research/market'],
    'competitors': ['competitors/'],
    'allaboutalfinder': ['allaboutalfinder/'],
    'partnerships': ['partnerships/', 'research/market-collaboration', 'competitors/12-'],
  }

  const prefixes = categoryPrefixes[category] || []
  const allResearch = content.research || []
  const researchFiles = allResearch.filter((file: any) =>
    prefixes.some(prefix => file.slug.startsWith(prefix))
  ).sort((a: any, b: any) => a.slug.localeCompare(b.slug))

  // Find the synthesis story
  const synthesisSlug = synthesisStories[category]
  const synthesisStory = researchFiles.find((file: any) => file.slug === synthesisSlug)
  const supportingStories = researchFiles.filter((file: any) => file.slug !== synthesisSlug)

  // Extract metrics from synthesis story
  const metrics = synthesisStory ? extractMetrics(synthesisStory.content) : []

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

          {/* Hero Header */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#065D7E] via-[#0a7aa0] to-[#11D4D8] p-8 mb-8 shadow-xl">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                  <CategoryIcon className="w-8 h-8 text-white" />
                </div>
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                  {researchCategory.count} Research Files
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {researchCategory.title}
              </h1>
              <p className="text-lg text-white/90 max-w-3xl">
                {researchCategory.description}
              </p>
            </div>
          </div>

          {/* Key Metrics Dashboard */}
          {metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {metrics.map((metric, idx) => {
                const Icon = metric.icon
                return (
                  <Card key={idx} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#065D7E]">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${colors.from} ${colors.to} bg-opacity-10`}>
                          <Icon className={`w-4 h-4 ${colors.accent}`} />
                        </div>
                        <span className="text-xs text-gray-500 uppercase tracking-wide">{metric.label}</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}

          {/* Synthesis Story - Featured */}
          {synthesisStory && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${colors.from} ${colors.to}`}>
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#065D7E]">Executive Synthesis</h2>
                  <p className="text-sm text-gray-600">Comprehensive analysis and strategic recommendations</p>
                </div>
                <Badge className={`ml-auto bg-gradient-to-r ${colors.from} ${colors.to} text-white border-0`}>
                  Featured
                </Badge>
              </div>

              <Card className="overflow-hidden shadow-lg border-2 border-[#065D7E]/20 bg-white">
                <CardHeader className={`bg-gradient-to-r ${colors.from} ${colors.to} text-white`}>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <FileText className="w-6 h-6" />
                    {synthesisStory.title || synthesisStory.slug}
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none p-6">
                  <MarkdownRenderer content={synthesisStory.content} />
                </CardContent>
              </Card>
            </div>
          )}

          {/* Supporting Research */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gray-100">
                <Search className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#065D7E]">Supporting Research</h2>
                <p className="text-sm text-gray-600">
                  {supportingStories.length} in-depth studies and analysis reports
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supportingStories.map((file: any, index: number) => (
                <Link
                  key={file.slug || index}
                  href={`#research-${index}`}
                  className="group"
                >
                  <Card className="h-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-[#065D7E]/50 transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${colors.from} ${colors.to} bg-opacity-10 mt-1`}>
                          <FileText className={`w-4 h-4 ${colors.accent}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-[#065D7E] transition-colors">
                            {file.title || file.slug}
                          </h3>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {file.slug}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#065D7E] group-hover:translate-x-1 transition-all mt-2 flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Full Research Archive (Collapsible) */}
          {supportingStories.length > 0 && (
            <div className="mb-8">
              <details className="group">
                <summary className="cursor-pointer">
                  <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          <span className="font-semibold text-gray-900">
                            View Full Research Archive ({supportingStories.length} files)
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </summary>

                <div className="mt-4 space-y-6">
                  {supportingStories.map((file: any, index: number) => (
                    <Card key={file.slug || index} id={`research-${index}`} className="overflow-hidden bg-white border border-gray-200 shadow-sm">
                      <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b">
                        <CardTitle className="flex items-center gap-2 text-lg text-gray-900">
                          <FileText className="w-5 h-5 text-gray-600" />
                          {file.title || file.slug}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="prose prose-gray max-w-none p-6">
                        <MarkdownRenderer content={file.content} />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </details>
            </div>
          )}

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-[#065D7E] mb-4">Explore Other Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(researchCategories).map(([key, cat]) => {
                const CatIcon = cat.icon
                const catColors = categoryColors[key] || categoryColors['market-research']
                return (
                  <Link
                    key={key}
                    href={`/research/${key}`}
                    className={`block p-4 rounded-lg border-2 transition-all ${
                      key === category
                        ? 'border-[#065D7E] bg-[#065D7E]/5 shadow-md'
                        : 'border-gray-200 hover:border-[#065D7E]/50 hover:shadow-md bg-white'
                    }`}
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${catColors.from} ${catColors.to} bg-opacity-10 w-fit mb-3`}>
                      <CatIcon className={`w-5 h-5 ${catColors.accent}`} />
                    </div>
                    <p className="text-sm font-medium mb-1 text-gray-900">{cat.title}</p>
                    <p className="text-xs text-gray-500">{cat.count} files</p>
                  </Link>
                )
              })}
            </div>
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
