import { Sidebar } from '@/components/sidebar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, FileText, Search, Users, Handshake } from 'lucide-react'
import Link from 'next/link'

const researchCategories = [
  {
    slug: '01-Alfinder-Audit',
    title: 'Alfinder Audit',
    description: 'Comprehensive evaluation of Alfinder\'s current presence, product, and potential',
    count: 21,
    icon: Search,
  },
  {
    slug: '02-Competitor-Deep-Dives',
    title: 'Competitor Deep Dives',
    description: 'Detailed analysis of global and local search technology competitors',
    count: 14,
    icon: Users,
  },
  {
    slug: '03-Global-Market-Trends',
    title: 'Global Market Trends',
    description: 'MENA e-commerce market analysis and macro search technology trends',
    count: 14,
    icon: FileText,
  },
  {
    slug: '04-Partnership-Ecosystem',
    title: 'Partnership Ecosystem',
    description: 'Strategic analysis of platforms, agencies, and regional partners',
    count: 11,
    icon: Handshake,
  },
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />

      <main className="lg:ml-72">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <Badge className="mb-4 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20">
              Research
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#065D7E]">
              Research & Analysis
            </h1>
            <p className="text-xl text-gray-700">
              Explore 60 research files covering market analysis, competitors, and strategic insights
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchCategories.map((category, idx) => {
              const Icon = category.icon
              const colors = ['border-l-[#065D7E]', 'border-l-[#11D4D8]', 'border-l-[#0a7aa0]', 'border-l-[#065D7E]']
              const iconColors = ['bg-[#065D7E]/10', 'bg-[#11D4D8]/10', 'bg-[#0a7aa0]/10', 'bg-[#065D7E]/10']
              const textColors = ['text-[#065D7E]', 'text-[#11D4D8]', 'text-[#0a7aa0]', 'text-[#065D7E]']
              return (
                <Link
                  key={category.slug}
                  href={`/research/${category.slug}`}
                  className="group"
                >
                  <Card className={`h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 ${colors[idx]}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg ${iconColors[idx]}`}>
                          <Icon className={`w-6 h-6 ${textColors[idx]}`} />
                        </div>
                        <Badge className="bg-[#F0FBFB] text-[#065D7E] border-[#11D4D8]/20">
                          {category.count} files
                        </Badge>
                      </div>
                      <h3 className={`text-xl font-semibold mb-2 text-[#065D7E] group-hover:text-[#11D4D8] transition-colors`}>
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-700 mb-4">{category.description}</p>
                      <div className={`flex items-center text-sm ${textColors[idx]} font-medium`}>
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
          <Card className="mt-8 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-[#065D7E]">21</p>
                  <p className="text-sm text-gray-700">Audit Files</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#11D4D8]">14</p>
                  <p className="text-sm text-gray-700">Competitors</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#0a7aa0]">14</p>
                  <p className="text-sm text-gray-700">Market Trends</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#065D7E]">11</p>
                  <p className="text-sm text-gray-700">Partnerships</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
