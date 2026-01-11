'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type BudgetLevel = '20k' | '40k'

interface BudgetContextType {
  budgetLevel: BudgetLevel
  setBudgetLevel: (level: BudgetLevel) => void
  getMetrics: () => BudgetMetrics
}

export interface BudgetMetrics {
  budget: number
  budgetLabel: string
  paidMedia: number
  content: number
  freelancers: number
  tools: number
  retention: number
  targetUsers: string
  targetUsersMin: number
  targetUsersMax: number
  initialTrials: number
  initialPayingUsers: number
  totalPayingUsersWithReinvestment: number
  monthlyMRR: string
  ltvGenerated: string
  cpa: number
  roadmap: Array<{
    month: string
    users: string
    focus: string
    milestone: string
  }>
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined)

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [budgetLevel, setBudgetLevel] = useState<BudgetLevel>('20k')

  const getMetrics = (): BudgetMetrics => {
    // Fixed costs (same for both budgets)
    const fixedFreelancers = 3000
    const fixedTools = 1000
    const fixedRetention = 1000

    if (budgetLevel === '20k') {
      return {
        budget: 20000,
        budgetLabel: '$20K',
        paidMedia: 12000,
        content: 3000,
        freelancers: fixedFreelancers,
        tools: fixedTools,
        retention: fixedRetention,
        targetUsers: '80-110',
        targetUsersMin: 80,
        targetUsersMax: 110,
        initialTrials: 150,
        initialPayingUsers: 50,
        totalPayingUsersWithReinvestment: 95,
        monthlyMRR: '$6.4K-$8.8K',
        ltvGenerated: '$77K-$106K',
        cpa: 80,
        roadmap: [
          { month: 'Month 1', users: '0', focus: 'Launch all channels', milestone: 'GTM Launch Complete' },
          { month: 'Month 2', users: '10-20', focus: 'First paying users', milestone: 'Reinvestment Loop Active' },
          { month: 'Month 3', users: '25-35', focus: 'Validation phase', milestone: 'Break-Even Approaching' },
          { month: 'Month 4', users: '40-60', focus: 'Scaling winners', milestone: 'Momentum Building' },
          { month: 'Month 5', users: '60-80', focus: 'Aggressive growth', milestone: 'Target in Range' },
          { month: 'Month 6', users: '80-110', focus: 'Final push', milestone: 'Goal Achieved' },
        ],
      }
    }
    return {
      budget: 40000,
      budgetLabel: '$40K',
      paidMedia: 30000,
      content: 5000,
      freelancers: fixedFreelancers,
      tools: fixedTools,
      retention: fixedRetention,
      targetUsers: '160-220',
      targetUsersMin: 160,
      targetUsersMax: 220,
      initialTrials: 375,
      initialPayingUsers: 125,
      totalPayingUsersWithReinvestment: 235,
      monthlyMRR: '$12.8K-$17.6K',
      ltvGenerated: '$154K-$211K',
      cpa: 80,
      roadmap: [
        { month: 'Month 1', users: '0', focus: 'Launch all channels', milestone: 'GTM Launch Complete' },
        { month: 'Month 2', users: '20-40', focus: 'First paying users', milestone: 'Reinvestment Loop Active' },
        { month: 'Month 3', users: '50-70', focus: 'Validation phase', milestone: 'Break-Even Achieved' },
        { month: 'Month 4', users: '90-120', focus: 'Scaling winners', milestone: 'Cash Flow Positive' },
        { month: 'Month 5', users: '130-170', focus: 'Aggressive growth', milestone: 'Accelerating Growth' },
        { month: 'Month 6', users: '160-220', focus: 'Final push', milestone: 'Goal Achieved' },
      ],
    }
  }

  return (
    <BudgetContext.Provider value={{ budgetLevel, setBudgetLevel, getMetrics }}>
      {children}
    </BudgetContext.Provider>
  )
}

export function useBudget() {
  const context = useContext(BudgetContext)
  if (context === undefined) {
    throw new Error('useBudget must be used within a BudgetProvider')
  }
  return context
}
