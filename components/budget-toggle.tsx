'use client'

import { useState } from 'react'
import { useBudget } from './budget-context'
import { DollarSign, TrendingUp, Minimize2, Maximize2 } from 'lucide-react'

export function BudgetToggle() {
  const { budgetLevel, setBudgetLevel, getMetrics } = useBudget()
  const metrics = getMetrics()
  const [isMinimized, setIsMinimized] = useState(false)

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-8 left-8 z-50 bg-white rounded-lg shadow-xl border-2 border-[#11D4D8]/20 p-3 hover:shadow-2xl transition-all duration-200 animate-fade-in group"
        title="Show Budget Scenario"
      >
        <div className="flex items-center gap-2">
          <Maximize2 className="w-4 h-4 text-[#065D7E]" />
          <span className="font-bold text-[#065D7E]">{metrics.budgetLabel}</span>
        </div>
      </button>
    )
  }

  return (
    <div className="fixed bottom-8 left-8 z-50 bg-white rounded-xl shadow-2xl border-2 border-[#11D4D8]/20 p-4 animate-fade-in max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-[#065D7E] to-[#11D4D8]">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">BUDGET SCENARIO</p>
            <p className="text-lg font-bold text-[#065D7E]">{metrics.budgetLabel}</p>
          </div>
        </div>
        <button
          onClick={() => setIsMinimized(true)}
          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
          title="Minimize"
        >
          <Minimize2 className="w-4 h-4" />
        </button>
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
