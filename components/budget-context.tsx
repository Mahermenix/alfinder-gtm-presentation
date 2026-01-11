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
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined)

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [budgetLevel, setBudgetLevel] = useState<BudgetLevel>('20k')

  const getMetrics = (): BudgetMetrics => {
    if (budgetLevel === '20k') {
      return {
        budget: 20000,
        budgetLabel: '$20K',
        paidMedia: 12000,
        content: 3000,
        freelancers: 3000,
        tools: 1000,
        retention: 1000,
        targetUsers: '80-110',
        targetUsersMin: 80,
        targetUsersMax: 110,
        initialTrials: 150,
        initialPayingUsers: 50,
        totalPayingUsersWithReinvestment: 95,
        monthlyMRR: '$6.4K-$8.8K',
        ltvGenerated: '$77K-$106K',
        cpa: 80,
      }
    }
    return {
      budget: 40000,
      budgetLabel: '$40K',
      paidMedia: 24000,
      content: 6000,
      freelancers: 6000,
      tools: 2000,
      retention: 2000,
      targetUsers: '160-220',
      targetUsersMin: 160,
      targetUsersMax: 220,
      initialTrials: 300,
      initialPayingUsers: 100,
      totalPayingUsersWithReinvestment: 190,
      monthlyMRR: '$12.8K-$17.6K',
      ltvGenerated: '$154K-$211K',
      cpa: 80,
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
