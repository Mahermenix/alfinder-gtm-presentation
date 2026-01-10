import { Sidebar } from '@/components/sidebar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Search, FileText, Users, Building2, Handshake } from 'lucide-react'
import Link from 'next/link'

const researchCategories = [
  {
    slug: 'market-research',
    title: 'Market Research',
    description: 'MENA e-commerce market analysis and search technology trends',
    count: 14,
    icon: FileText,
    color: 'blue',
  },
  {
    slug: 'competitors',
    title: 'Competitor Analysis',
    description: 'In-depth analysis of 13 key competitors in the search space',
    count: 13,
    icon: Users,
    color: 'red',
  },
  {
    slug: 'allaboutalfinder',
    title: 'Alfinder Deep Dive',
    description: '18 comprehensive studies of Alfinder\'s position and potential',
    count: 18,
    icon: Search,
    color: 'purple',
  },
  {
    slug: 'partnerships',
    title: 'Partnership Opportunities',
    description: 'Strategic partnerships with platforms and agencies',
    count: 10,
    icon: Handshake,
    color: 'green',
  },
]

const colorMap = {
  blue: 'border-l-blue-500',
  red: 'border-l-red-500',
  purple: 'border-l-purple-500',
  green: 'border-l-green-500',
}

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Sidebar />

      <main className="lg:ml-72">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <Badge className="mb-4" variant="gradient">
              Research
            </Badge>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Research & Analysis
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore 55+ research files covering market analysis, competitors, and strategic insights
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchCategories.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.slug}
                  href={`/research/${category.slug}`}
                  className="group"
                >
                  <Card className={`h-full border-l-4 ${colorMap[category.color as keyof typeof colorMap]} transition-all hover:shadow-lg`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="secondary">{category.count} files</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                      <div className="flex items-center text-sm text-primary font-medium">
                        View Research
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          {/* Stats Summary */}
          <Card className="mt-8 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">14</p>
                  <p className="text-sm text-muted-foreground">Market Studies</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-600">13</p>
                  <p className="text-sm text-muted-foreground">Competitors</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-pink-600">18</p>
                  <p className="text-sm text-muted-foreground">Alfinder Files</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">10</p>
                  <p className="text-sm text-muted-foreground">Partnerships</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
