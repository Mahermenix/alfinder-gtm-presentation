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
      <div className="space-y-4">
        {stages.map((stage, index) => {
          const width = (stage.value / maxValue) * 100
          const isLast = index === stages.length - 1

          return (
            <div key={stage.label} className="relative">
              {/* Stage label */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">{stage.label}</span>
                <span className="text-sm font-bold" style={{ color: stage.color }}>
                  {stage.value.toLocaleString()}
                </span>
              </div>

              {/* Funnel bar */}
              <div className="relative h-16 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 flex items-center justify-end pr-4 transition-all duration-500"
                  style={{
                    width: `${width}%`,
                    background: `linear-gradient(to right, ${stage.color}88, ${stage.color})`,
                    clipPath: isLast
                      ? 'none'
                      : `polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)`,
                  }}
                >
                  {width > 15 && (
                    <span className="text-white font-bold text-sm">
                      {((stage.value / stages[0].value) * 100).toFixed(0)}%
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              {stage.description && (
                <p className="text-xs text-muted-foreground mt-2">
                  {stage.description}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-muted-foreground">
          Starting with {stages[0].value.toLocaleString()} trials,{' '}
          {((stages[stages.length - 1].value / stages[0].value) * 100).toFixed(1)}%
          convert to paying customers.
        </p>
      </div>
    </Card>
  )
}
