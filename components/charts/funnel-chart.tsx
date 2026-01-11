'use client'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface FunnelStage {
  label: string
  value: number
  color: string
  description?: string
}

interface FunnelChartProps {
  stages: FunnelStage[]
  className?: string
}

export function FunnelChart({ stages, className }: FunnelChartProps) {
  const maxValue = Math.max(...stages.map((s) => s.value))

  return (
    <Card className={cn('p-6', className)}>
      <h3 className="text-lg font-semibold mb-6">Conversion Funnel</h3>

      {/* Funnel Visualization - Proper funnel shape */}
      <div className="relative py-4">
        {/* Connecting lines */}
        <div className="absolute left-4 right-4 top-8 bottom-8 flex flex-col items-center justify-around">
          {stages.map((stage, index) => {
            if (index === stages.length - 1) return null
            const nextStage = stages[index + 1]
            const currentWidth = (stage.value / maxValue) * 100
            const nextWidth = (nextStage.value / maxValue) * 100
            return (
              <div
                key={`line-${index}`}
                className="w-px bg-gradient-to-b from-gray-300 to-gray-400 absolute"
                style={{
                  top: `${((index + 1) / stages.length) * 100 - 8}%`,
                  height: `${(1 / stages.length) * 100 + 8}%`,
                }}
              />
            )
          })}
        </div>

        {/* Funnel stages stacked */}
        <div className="space-y-3">
          {stages.map((stage, index) => {
            const width = (stage.value / maxValue) * 100

            return (
              <div key={stage.label} className="relative">
                {/* Stage label with alignment */}
                <div className="flex items-center justify-between mb-1 px-2">
                  <span className="font-medium text-sm text-gray-700">{stage.label}</span>
                  <span className="text-sm font-bold" style={{ color: stage.color }}>
                    {stage.value.toLocaleString()}
                    <span className="text-gray-400 font-normal ml-1">
                      ({((stage.value / stages[0].value) * 100).toFixed(0)}%)
                    </span>
                  </span>
                </div>

                {/* Funnel segment - trapezoid shape */}
                <div className="relative h-12 flex items-center justify-center">
                  <div
                    className="relative h-full transition-all duration-500 flex items-center justify-center shadow-md"
                    style={{
                      width: `${Math.max(width, 20)}%`,
                      background: `linear-gradient(135deg, ${stage.color}dd, ${stage.color}bb)`,
                      clipPath: index === stages.length - 1
                        ? 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%)'
                        : index === 0
                          ? 'polygon(0% 0, 100% 0, 85% 100%, 15% 100%)'
                          : 'polygon(15% 0, 85% 0, 75% 100%, 25% 100%)',
                      margin: '0 auto',
                    }}
                  >
                    {/* Percentage in center */}
                    {width > 20 && (
                      <span className="text-white font-bold text-sm drop-shadow-lg">
                        {((stage.value / stages[0].value) * 100).toFixed(0)}%
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                {stage.description && (
                  <p className="text-xs text-gray-500 mt-1 px-2 text-center">
                    {stage.description}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-muted-foreground">
          Starting with <span className="font-bold text-gray-700">{stages[0].value.toLocaleString()} trials</span>,{' '}
          <span className="font-bold" style={{ color: stages[stages.length - 1].color }}>
            {((stages[stages.length - 1].value / stages[0].value) * 100).toFixed(1)}%
          </span>{' '}
          convert to paying customers.
        </p>
      </div>
    </Card>
  )
}
