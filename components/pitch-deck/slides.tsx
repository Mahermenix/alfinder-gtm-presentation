'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp,
  Users,
  Target,
  Zap,
  Globe,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Database,
  Search,
  MessageSquare,
  ShoppingBag,
  Award,
  DollarSign
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const slideVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 }
  })
}

// 1. Title Slide
export const Slide1 = () => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="h-full flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-[#065D7E] to-[#0a7aa0] text-white overflow-hidden relative"
  >
    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTMwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] [length:120px_120px]" />

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-8 relative"
    >
      <div className="w-48 h-48 bg-white rounded-3xl p-6 shadow-2xl relative z-10">
        <Image
          src="https://alfinder.ai/dist/img/logo.png"
          alt="AlFinder Logo"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="absolute -inset-4 bg-[#11D4D8]/20 rounded-full blur-3xl -z-10 animate-pulse" />
    </motion.div>

    <motion.h1
      custom={1}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="text-7xl font-bold mb-4 tracking-tighter"
    >
      ALFINDER
    </motion.h1>

    <motion.p
      custom={2}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="text-2xl text-white/80 max-w-2xl font-light"
    >
      The Intelligent Product Discovery Platform <br />
      Built for the Arabic Consumer
    </motion.p>

    <motion.div
      custom={3}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="mt-12"
    >
      <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg backdrop-blur-md">
        Series A Pitch Deck 2026
      </Badge>
    </motion.div>
  </motion.div>
)

// 2. The Problem
export const Slide2 = () => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="h-full flex flex-col p-16 bg-[#F0FBFB]"
  >
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <Badge className="mb-4 bg-[#065D7E]/10 text-[#065D7E] border-[#065D7E]/20">THE PROBLEM</Badge>
        <h2 className="text-5xl font-bold text-[#065D7E] mb-8 leading-tight">
          People can't <span className="text-red-500 underline decoration-2 underline-offset-8">BUY</span> <br />
          what they can't <span className="text-[#11D4D8]">FIND</span>
        </h2>

        <div className="space-y-6">
          {[
            { stat: "46%", text: "of shoppers start journeys with search, yet 70% fail to find relevant items." },
            { stat: "No Dialect", text: "Global search engines fail to understand Arabic dialects (Saudi/Najdi/Hijazi)." },
            { stat: "Lost Revenue", text: "Low conversion rates due to irrelevant search and lack of personalization." }
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-6 items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="text-3xl font-bold text-[#11D4D8] min-w-[100px]">{item.stat}</div>
              <p className="text-gray-600 text-xl">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative h-full min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, rotate: 5, y: 50 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="flex-1 h-8 bg-gray-50 rounded-full px-4 text-xs text-gray-400 flex items-center">
              https://top-saudi-store.com/search?q=بدي فستان
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-100 rounded-xl space-y-4">
            <Search className="w-16 h-16 text-gray-200" />
            <p className="text-gray-400 font-medium">0 Results Found for "بدي فستان"</p>
            <p className="text-gray-300 text-sm">(Standard search only understands MSA)</p>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
)

// 3. The "Dialect Moat" (NEW Strategic Slide)
export const Slide3 = () => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="h-full flex flex-col p-16 bg-white"
  >
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20">OUR MOAT</Badge>
      <h2 className="text-5xl font-bold text-[#065D7E]">The Dialect Advantage</h2>
      <p className="text-xl text-gray-500 mt-4 italic">Global search understands MSA. AlFinder understands Customers.</p>
    </div>

    <div className="flex-1 grid grid-cols-2 gap-12">
      <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 relative opacity-60">
        <Badge className="absolute -top-3 left-8 bg-gray-400">TRADITIONAL SEARCH</Badge>
        <p className="text-2xl font-semibold mb-8">Query: "كشخة عرس"</p>
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
          <p className="text-red-500 font-bold mt-8 flex items-center gap-2">
            <Search className="w-5 h-5" /> Result: 0 Matches
          </p>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-gradient-to-br from-[#065D7E] to-[#0a7aa0] text-white shadow-2xl relative transform scale-105">
        <Badge className="absolute -top-3 left-8 bg-[#11D4D8] text-[#065D7E]">ALFINDER AI</Badge>
        <p className="text-2xl font-semibold mb-8">Query: "كشخة عرس"</p>
        <div className="space-y-4">
          <p className="text-[#11D4D8] font-bold text-sm tracking-widest uppercase">INTENT DETECTED: NAJDI DIALECT</p>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white/10 h-32 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-[#11D4D8]/50" />
              </div>
            ))}
          </div>
          <p className="text-[#11D4D8] font-bold mt-8 flex items-center gap-2 text-xl">
            <CheckCircle2 className="w-6 h-6" /> 14 Relevant Outfits Found
          </p>
        </div>
      </div>
    </div>
  </motion.div>
)

// 4. End-to-End Discovery
export const Slide4 = () => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="h-full flex flex-col p-16 bg-[#065D7E] text-white relative overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#11D4D8]/10 rounded-full blur-[120px]" />

    <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
      <Badge className="mb-4 bg-white/10 text-white border-white/20">THE PLATFORM</Badge>
      <h2 className="text-6xl font-bold mb-16 tracking-tight">One Platform. Total Discovery.</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {[
          { icon: Search, title: "Intelligent Search", desc: "Dialect-aware, context-sensitive search that converts intent into sales." },
          { icon: Sparkles, title: "Recommendations", desc: "Dynamic, AI-driven personal shopping feeds on every page." },
          { icon: MessageSquare, title: "AI Shopping Assistant", desc: "A 24/7 personal shopper that guides customers through the funnel." }
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300"
          >
            <div className="mb-6 p-4 rounded-2xl bg-[#11D4D8]/20 inline-block group-hover:scale-110 transition-transform">
              <item.icon className="w-8 h-8 text-[#11D4D8]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-white/60 text-lg leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-16 flex items-center gap-4 text-xl font-medium"
      >
        <span className="text-[#11D4D8]">Products</span>
        <span className="text-white/30">+</span>
        <span className="text-[#11D4D8]">Content</span>
        <span className="text-white/30">+</span>
        <span className="text-[#11D4D8]">Behavior</span>
        <span className="text-white/30">=</span>
        <span className="px-6 py-2 bg-white text-[#065D7E] rounded-full shadow-xl">AlFinder Discovery Intelligence</span>
      </motion.div>
    </div>
  </motion.div>
)

// Add more slides following the same pattern...
// 5. Intelligent Search Spotlight
export const Slide5 = () => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="h-full flex flex-col p-16 bg-white"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full items-center">
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
          alt="E-commerce UI"
          width={800}
          height={600}
          className="rounded-3xl shadow-2xl"
        />
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-10 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[300px]"
        >
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-5 h-5 text-[#11D4D8]" />
            <span className="font-bold text-gray-800">Dynamic Filters</span>
          </div>
          <p className="text-sm text-gray-500">Filter by Season, Fabric, and Occasion - all parsed automatically from product content.</p>
        </motion.div>
      </div>

      <div>
        <Badge className="mb-4 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20">FEATURE SPOTLIGHT</Badge>
        <h2 className="text-5xl font-bold text-[#065D7E] mb-6">Intent-Aware Search</h2>
        <ul className="space-y-6 text-xl text-gray-600">
          <li className="flex items-center gap-4">
            <CheckCircle2 className="w-6 h-6 text-[#11D4D8]" />
            <span>Customizable Search Inputs & Results</span>
          </li>
          <li className="flex items-center gap-4">
            <CheckCircle2 className="w-6 h-6 text-[#11D4D8]" />
            <span>Synonym & Redirect Management</span>
          </li>
          <li className="flex items-center gap-4">
            <CheckCircle2 className="w-6 h-6 text-[#11D4D8]" />
            <span>Manual Product Promotion & Boost</span>
          </li>
          <li className="flex items-center gap-4 text-[#065D7E] font-bold">
            <ArrowRight className="w-6 h-6" />
            <span>Reduce "No Results" by 85%</span>
          </li>
        </ul>
      </div>
    </div>
  </motion.div>
)

// 6. Case Study: Laverne
export const Slide6 = () => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="h-full flex flex-col p-16 bg-[#F0FBFB]"
  >
    <div className="mb-12">
      <Badge className="mb-4 bg-[#065D7E]/10 text-[#065D7E] border-[#065D7E]/20">CASE STUDY</Badge>
      <h2 className="text-5xl font-bold text-[#065D7E]">Proven Impact: Laverne</h2>
    </div>

    <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {[
        { label: "Revenue Influenced", value: "$1.35M", desc: "Total revenue attributed to AlFinder paths in 2 months." },
        { label: "Monthly Searches", value: "460K+", desc: "Successful queries handled during peak sales." },
        { label: "Product Discoveries", value: "262K", desc: "Individual product views triggered from search." },
        { label: "Conversion Lift", value: "24%", desc: "Increase in add-to-cart compared to generic search." }
      ].map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between"
        >
          <div>
            <p className="text-gray-500 font-medium mb-4">{item.label}</p>
            <p className="text-5xl font-bold text-[#11D4D8] mb-6">{item.value}</p>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <div className="mt-12 p-8 rounded-3xl bg-white border border-gray-100 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center">
          <Users className="w-8 h-8 text-[#065D7E]" />
        </div>
        <div>
          <p className="text-[#065D7E] font-bold text-xl">"AlFinder transformed how our customers find perfumes. The dialect support is unmatched."</p>
          <p className="text-gray-400 mt-2">— E-commerce Director, Laverne</p>
        </div>
      </div>
    </div>
  </motion.div>
)

// 7. Traction (Adjusted to Truth)
export const Slide7 = () => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="h-full flex flex-col p-16 bg-white"
  >
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20">PHASE 1: VALIDATION</Badge>
      <h2 className="text-5xl font-bold text-[#065D7E]">Market Fit Validated</h2>
      <p className="text-xl text-gray-500 mt-4">Growth achieved with $0 marketing spend.</p>
    </div>

    <div className="grid grid-cols-3 gap-12 max-w-5xl mx-auto w-full">
      {[
        { icon: ShoppingBag, label: "Active Stores", value: "200+", sub: "Official Portfolio Claim" },
        { icon: Search, label: "Queries Processed", value: "1.2M+", sub: "Unique Arabic intents mapped" },
        { icon: Globe, label: "Unique Users", value: "1.7M", sub: "Total shoppers served" }
      ].map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <div className="mx-auto w-20 h-20 bg-[#F0FBFB] rounded-2xl flex items-center justify-center mb-6">
            <item.icon className="w-10 h-10 text-[#065D7E]" />
          </div>
          <p className="text-6xl font-black text-[#065D7E] mb-2">{item.value}</p>
          <p className="text-xl font-bold text-gray-700">{item.label}</p>
          <p className="text-gray-400 mt-2">{item.sub}</p>
        </motion.div>
      ))}
    </div>

    <div className="mt-20">
      <p className="text-center text-gray-400 mb-8 uppercase tracking-widest text-xs font-bold">Trusted by brands on Salla & Zid</p>
      <div className="flex justify-center flex-wrap gap-12 grayscale opacity-40">
        {/* Logic to include partner logos here */}
        <div className="h-8 w-24 bg-gray-200 rounded" />
        <div className="h-8 w-24 bg-gray-200 rounded" />
        <div className="h-8 w-24 bg-gray-200 rounded" />
        <div className="h-8 w-24 bg-gray-200 rounded" />
        <div className="h-8 w-24 bg-gray-200 rounded" />
      </div>
    </div>
  </motion.div>
)

// 8. Unit Economics (NEW)
export const Slide8 = () => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="h-full flex flex-col p-16 bg-[#065D7E] text-white"
  >
    <div className="mb-16">
      <Badge className="mb-4 bg-white/10 text-white border-white/20">THE MONEY MACHINE</Badge>
      <h2 className="text-5xl font-bold">Predictable Growth Economics</h2>
    </div>

    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        {[
          { label: "Customer Acquisition Cost (CAC)", value: "$200", detail: "Targeted Salla store acquisition" },
          { label: "Customer Lifetime Value (LTV)", value: "$1,040", detail: "Net value over 12 months" },
          { label: "LTV : CAC Ratio", value: "5.2x", detail: "Significant headroom for scaling", color: "text-[#11D4D8]" },
          { label: "Payback Period", value: "2.5 Months", detail: "Rapid reinvestment capability" }
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center"
          >
            <div>
              <p className="text-white/60 mb-1">{item.label}</p>
              <p className={`text-3xl font-bold ${item.color || 'text-white'}`}>{item.value}</p>
            </div>
            <p className="text-xs text-white/30 text-right max-w-[150px]">{item.detail}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative">
        <div className="p-12 rounded-[40px] bg-white text-[#065D7E] shadow-2xl">
          <h3 className="text-2xl font-bold mb-8">The Growth Loop</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#11D4D8]/10 flex items-center justify-center font-bold">1</div>
              <p className="font-medium">Invest $20k in Marketing</p>
            </div>
            <div className="w-0.5 h-6 bg-gray-100 ml-5" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#11D4D8]/10 flex items-center justify-center font-bold">2</div>
              <p className="font-medium">Acquire 100 Paying Stores</p>
            </div>
            <div className="w-0.5 h-6 bg-gray-100 ml-5" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#11D4D8]/10 flex items-center justify-center font-bold">3</div>
              <p className="font-medium">Generate $10k+ Monthly Contribution</p>
            </div>
            <div className="w-0.5 h-6 bg-gray-100 ml-5" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#11D4D8] text-white flex items-center justify-center font-bold">4</div>
              <p className="font-bold">Reinvest into $40k Acquisition</p>
            </div>
          </div>
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -bottom-6 -right-6 bg-[#11D4D8] p-6 rounded-3xl shadow-xl text-center"
        >
          <p className="text-xs font-bold text-[#065D7E] uppercase mb-1">Scale Potential</p>
          <p className="text-4xl font-black text-[#065D7E]">300+</p>
          <p className="text-xs font-medium text-[#065D7E]">Stores in 6 mo</p>
        </motion.div>
      </div>
    </div>
  </motion.div>
)

// 9. Market Opportunity
export const Slide9 = () => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="h-full flex flex-col p-16 bg-[#F0FBFB]"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full items-center">
      <div>
        <Badge className="mb-4 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20">MARKET SIZE</Badge>
        <h2 className="text-5xl font-bold text-[#065D7E] mb-8 leading-tight">The MENA E-Commerce <br /> Boom</h2>
        <div className="space-y-6">
          <Card className="border-0 shadow-sm overflow-hidden">
            <div className="p-1 bg-[#11D4D8]" />
            <CardContent className="p-8">
              <p className="text-gray-500 mb-2 font-medium">TAM: MENA E-Commerce Stores</p>
              <p className="text-4xl font-bold text-[#065D7E]">120,000+</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm overflow-hidden">
            <div className="p-1 bg-[#0a7aa0]" />
            <CardContent className="p-8">
              <p className="text-gray-500 mb-2 font-medium">Salla/Zid Merchant Ecosystem</p>
              <p className="text-4xl font-bold text-[#065D7E]">100,000+</p>
              <p className="text-sm text-gray-400 mt-2">One-click integration moat</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm overflow-hidden">
            <div className="p-1 bg-[#065D7E]" />
            <CardContent className="p-8">
              <p className="text-gray-500 mb-2 font-medium">Our Initial Target (SOM)</p>
              <p className="text-4xl font-bold text-[#11D4D8]">12,000</p>
              <p className="text-sm text-gray-400 mt-2">Mid-to-high volume merchants</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="w-[400px] h-[400px] border-2 border-[#11D4D8]/30 rounded-full flex items-center justify-center relative">
          <div className="w-[280px] h-[280px] border-2 border-[#11D4D8]/50 rounded-full flex items-center justify-center relative">
            <div className="w-[160px] h-[160px] bg-[#065D7E] rounded-full flex items-center justify-center text-center p-4 shadow-2xl">
              <p className="text-white font-bold leading-tight uppercase text-xs tracking-widest">Global Ambition</p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full"
            >
              <div className="absolute -top-3 left-1/2 -ml-3 w-6 h-6 bg-[#11D4D8] rounded-lg shadow-lg" />
            </motion.div>
          </div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full"
          >
            <div className="absolute top-1/2 -right-3 -mt-3 w-6 h-6 bg-[#0a7aa0] rounded-lg shadow-lg" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 right-0 p-8 text-right">
          <p className="text-3xl font-black text-[#065D7E]">$10M+</p>
          <p className="text-gray-400 font-bold uppercase tracking-tighter">Immediate ARR Potential</p>
        </div>
      </div>
    </div>
  </motion.div>
)

// 10. Competitive Landscape
export const Slide10 = () => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="h-full flex flex-col p-16 bg-white"
  >
    <div className="mb-12">
      <Badge className="mb-4 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20">COMPETITIVE LANDSCAPE</Badge>
      <h2 className="text-5xl font-bold text-[#065D7E]">Why We Win</h2>
    </div>

    <div className="flex-1 overflow-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b-2 border-gray-100">
            <th className="py-6 text-gray-400 font-medium">Capability</th>
            <th className="py-6 text-[#065D7E] font-bold text-center">AlFinder</th>
            <th className="py-6 text-gray-400 font-medium text-center">Algolia</th>
            <th className="py-6 text-gray-400 font-medium text-center">Lableb</th>
            <th className="py-6 text-gray-400 font-medium text-center">Fact-Finder</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {[
            { feature: "Arabic Dialect AI", alfinder: true, others: [false, "Basic", false] },
            { feature: "One-Click Platform Integration", alfinder: true, others: [false, false, "Limited"] },
            { feature: "AI Shopping Companion", alfinder: true, others: [false, false, false] },
            { feature: "Local Saudi/Gulf Support", alfinder: true, others: [false, true, false] },
            { feature: "Zero-Dev Configuration", alfinder: true, others: [false, false, false] }
          ].map((row, i) => (
            <tr key={i} className="group hover:bg-[#F0FBFB] transition-colors">
              <td className="py-6 font-bold text-gray-700">{row.feature}</td>
              <td className="py-6 text-center">
                <CheckCircle2 className="w-8 h-8 text-[#11D4D8] mx-auto" />
              </td>
              {row.others.map((val, j) => (
                <td key={j} className="py-6 text-center text-gray-300">
                  {val === true ? <CheckCircle2 className="w-6 h-6 mx-auto opacity-30" /> : (val || "—")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#F0FBFB] to-transparent border border-[#F0FBFB]">
      <p className="text-xl font-medium text-gray-600">
        <span className="text-[#065D7E] font-bold">The Verdict:</span> Global tools are tech-generic. AlFinder is market-specific. We aren't just a search tool; we are an <span className="text-[#11D4D8] font-bold">Arabic Growth Engine.</span>
      </p>
    </div>
  </motion.div>
)

// 11. Roadmap
export const Slide11 = () => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="h-full flex flex-col p-16 bg-[#F0FBFB]"
  >
    <div className="mb-16 flex justify-between items-end">
      <div>
        <Badge className="mb-4 bg-[#065D7E]/10 text-[#065D7E] border-[#065D7E]/20">THE ROADMAP</Badge>
        <h2 className="text-5xl font-bold text-[#065D7E]">Scaling to $1M ARR</h2>
      </div>
      <div className="text-right">
        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2">Target Vision</p>
        <p className="text-3xl font-black text-[#11D4D8]">400+ CUSTOMERS</p>
      </div>
    </div>

    <div className="flex-1 relative">
      {/* Timeline Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2" />

      <div className="grid grid-cols-4 gap-4 h-full relative z-10">
        {[
          { year: "2024", title: "Core Foundation", items: ["Salla Platinum Partner", "Dialect Engine V2", "200+ Stores (Claimed)"] },
          { year: "2025 Q1-Q2", title: "The Scale Up", items: ["$20k GTM Launch", "Performance Engine", "160+ Stores"] },
          { year: "2025 Q3-Q4", title: "Ecosystem Expansion", items: ["Shopify Marketplace", "Zid Native Integration", "300+ Stores"] },
          { year: "2026", title: "Regional Dominance", items: ["Egypt/Jordan Launch", "AI Companion V3", "$1M ARR Target"] }
        ].map((phase, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'justify-start' : 'justify-end pb-20'}`}>
            {i % 2 === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="mb-8"
              >
                <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <p className="font-bold text-[#11D4D8] mb-2">{phase.year}</p>
                  <p className="font-bold text-[#065D7E] text-lg mb-4">{phase.title}</p>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="text-sm text-gray-500 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#11D4D8]" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            <div className="w-6 h-6 bg-[#065D7E] border-4 border-white rounded-full mx-auto shadow-lg relative z-20">
              {i % 2 !== 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="absolute top-full mt-8 left-1/2 -translate-x-1/2 w-[220px]"
                >
                  <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <p className="font-bold text-[#11D4D8] mb-2">{phase.year}</p>
                    <p className="font-bold text-[#065D7E] text-lg mb-4">{phase.title}</p>
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="text-sm text-gray-500 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#11D4D8]" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
)

// 12. Business Model
export const Slide12 = () => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="h-full flex flex-col p-16 bg-white"
  >
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-[#0a7aa0]/10 text-[#065D7E] border-[#0a7aa0]/20">PRICING</Badge>
      <h2 className="text-5xl font-bold text-[#065D7E]">Scalable Value Packages</h2>
    </div>

    <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
      {[
        { name: "Basic", price: "$58", sub: "/mo", features: ["< 4,000 SKU", "Standard Search Integration", "Basic Analytics"], border: "border-gray-100" },
        { name: "Growth", price: "$127", sub: "/mo", features: ["> 4,000 SKU", "1-Year Historical Reporting", "Cross-selling Suite", "Priority Support"], border: "border-[#11D4D8]", highlight: true },
        { name: "Enterprise", price: "Custom", sub: "", features: ["Unlimited SKUs", "Custom API Integrations", "Dedicated Account Manager", "Customizable Discovery Logic"], border: "border-gray-100" }
      ].map((plan, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className={`p-10 rounded-[40px] border-2 flex flex-col ${plan.border} ${plan.highlight ? 'bg-[#065D7E] text-white shadow-2xl scale-105' : 'bg-white text-gray-800'}`}
        >
          <p className={`font-bold mb-6 ${plan.highlight ? 'text-[#11D4D8]' : 'text-gray-400'}`}>{plan.name}</p>
          <div className="flex items-baseline gap-2 mb-10">
            <span className="text-5xl font-black">{plan.price}</span>
            <span className="text-lg opacity-60">{plan.sub}</span>
          </div>
          <ul className="space-y-4 mb-10 flex-1">
            {plan.features.map((f, j) => (
              <li key={j} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className={`w-5 h-5 mt-0.5 ${plan.highlight ? 'text-[#11D4D8]' : 'text-[#065D7E]'}`} />
                <span className="opacity-80">{f}</span>
              </li>
            ))}
          </ul>
          <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlight ? 'bg-[#11D4D8] text-[#065D7E] hover:scale-105' : 'bg-gray-50 text-[#065D7E] hover:bg-gray-100'}`}>
            {plan.name === "Enterprise" ? "Contact Us" : "Start Free Trial"}
          </button>
        </motion.div>
      ))}
    </div>
  </motion.div>
)

// 13. Meet the Team
export const Slide13 = () => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="h-full flex flex-col p-16 bg-[#065D7E] text-white"
  >
    <div className="mb-16">
      <Badge className="mb-4 bg-white/10 text-white border-white/20">THE LEADERSHIP</Badge>
      <h2 className="text-5xl font-bold">Built by Experts</h2>
    </div>

    <div className="grid grid-cols-4 gap-8">
      {[
        { name: "Mina Haleem", role: "CEO", xp: "18 Years Innovation", bio: "Serial Entrepreneur. ex-ITWorx Director. Tech Innovator.", icon: Award },
        { name: "Bashar Ahmad", role: "CTO", xp: "21+ Years AI", bio: "Deep Tech Researcher. Distributed Systems Expert.", icon: Database },
        { name: "Faris Yousfan", role: "CCO", xp: "E-Commerce Expert", bio: "ex-Amazon, ex-Zid. Growth Strategy Specialist.", icon: TrendingUp },
        { name: "Marketing Lead", role: "CMO", xp: "Growth Catalyst", bio: "Performance Marketing expert focused on MENA stores.", icon: Users }
      ].map((member, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center"
        >
          <div className="w-24 h-24 rounded-full bg-[#11D4D8]/20 flex items-center justify-center mb-6 border border-[#11D4D8]/30 shadow-lg shadow-[#11D4D8]/10">
            <member.icon className="w-10 h-10 text-[#11D4D8]" />
          </div>
          <p className="text-xl font-bold mb-1">{member.name}</p>
          <p className="text-[#11D4D8] font-medium text-sm mb-4 uppercase tracking-widest">{member.role}</p>
          <div className="h-px w-12 bg-white/10 mb-4" />
          <p className="text-xs text-white/40 mb-2 uppercase font-bold">{member.xp}</p>
          <p className="text-sm text-white/60 leading-relaxed font-light">{member.bio}</p>
        </motion.div>
      ))}
    </div>

    <div className="mt-16 text-center">
      <p className="text-white/40 font-medium uppercase tracking-[0.3em] text-xs mb-8">Executive Pedigree</p>
      <div className="flex justify-center gap-16 items-center flex-wrap grayscale contrast-200 opacity-20">
        <span className="text-2xl font-bold">AMAZON</span>
        <span className="text-2xl font-bold">SOUQ</span>
        <span className="text-2xl font-bold">ZID</span>
        <span className="text-2xl font-bold">TALABAT</span>
        <span className="text-2xl font-bold">ITWORX</span>
      </div>
    </div>
  </motion.div>
)

// 14. The Ask / Closing
export const Slide14 = () => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="h-full flex flex-col items-center justify-center text-center p-16 bg-white overflow-hidden relative"
  >
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#11D4D8]/5 rounded-full blur-[100px] -z-10" />

    <Badge className="mb-6 bg-[#11D4D8]/10 text-[#065D7E] border-[#11D4D8]/20 px-6 py-2 text-xl font-bold">THE ASK</Badge>
    <h2 className="text-7xl font-black text-[#065D7E] mb-8 tracking-tighter">Revolutionize Arabic Discovery</h2>
    <p className="text-2xl text-gray-500 max-w-3xl mb-16 leading-relaxed">
      We are raising <span className="text-[#065D7E] font-bold underline decoration-[#11D4D8] underline-offset-8">Series A</span> to scale our growth engine and dominate the Saudi & Gulf e-commerce market.
    </p>

    <div className="flex gap-8">
      <div className="flex flex-col items-center p-12 bg-gray-50 rounded-[40px] border border-gray-100 shadow-sm min-w-[300px]">
        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">Total Raised</p>
        <DollarSign className="w-12 h-12 text-[#11D4D8] mb-4" />
        <p className="text-4xl font-black text-[#065D7E]">$XM</p>
        <p className="text-sm text-gray-400 mt-2">Previous Rounds</p>
      </div>
      <div className="flex flex-col items-center p-12 bg-[#065D7E] rounded-[40px] shadow-2xl shadow-[#065D7E]/20 min-w-[300px]">
        <p className="text-white/40 font-bold uppercase tracking-widest text-xs mb-4">Current Ask</p>
        <TrendingUp className="w-12 h-12 text-[#11D4D8] mb-4" />
        <p className="text-4xl font-black text-white">$YM</p>
        <p className="text-sm text-white/40 mt-2">Scaling Marketing & Engineering</p>
      </div>
    </div>

    <div className="mt-24 space-y-4">
      <p className="text-[#065D7E] font-bold text-xl">hello@alfinder.ai</p>
      <p className="text-gray-400">Riyadh, Saudi Arabia | Dubai, UAE</p>
    </div>
  </motion.div>
)

export const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12, Slide13, Slide14
]
