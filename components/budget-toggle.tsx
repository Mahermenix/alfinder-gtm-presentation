'use client'

import { useBudget } from './budget-context'
import { DollarSign, TrendingUp } from 'lucide-react'

export function BudgetToggle() {
  const { budgetLevel, setBudgetLevel, getMetrics } = useBudget()
  const metrics = getMetrics()

  return (
    <div className="fixed bottom-8 left-8 z-50 bg-white rounded-xl shadow-2xl border-2 border-[#11D4D8]/20 p-4 animate-fade-in">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-gradient-to-br from-[#065D7E] to-[#11D4D8]">
          <DollarSign className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">BUDGET SCENARIO</p>
          <p className="text-lg font-bold text-[#065D7E]">{metrics.budgetLabel}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setBudgetLevel('20k')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
            budgetLevel === '20k'
              ? 'bg-white text-[#065D7E] shadow-md'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          $20K
        </button>
        <button
          onClick={() => setBudgetLevel('40k')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
            budgetLevel === '40k'
              ? 'bg-white text-[#065D7E] shadow-md'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          $40K
        </button>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">Target Users:</span>
          <span className="font-bold text-[#11D4D8]">{metrics.targetUsers}</span>
        </div>
        <div className="flex items-center justify-between text-xs mt-1">
          <span className="text-gray-500">Expected MRR:</span>
          <span className="font-bold text-[#065D7E]">{metrics.monthlyMRR}</span>
        </div>
      </div>
    </div>
  )
}
