'use client'

import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'
import { cn, formatCurrency, formatNumber, formatPercentage } from '@/lib/utils'

interface MetricCardProps {
  title: string
  value: string | number
  icon?: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  target?: string | number
  description?: string
  variant?: 'default' | 'currency' | 'percentage' | 'number'
  className?: string
}

export function MetricCard({
  title,
  value,
  icon: Icon,
  trend,
  target,
  description,
  variant = 'default',
  className,
}: MetricCardProps) {
  const displayValue =
    variant === 'currency' && typeof value === 'number'
      ? formatCurrency(value)
      : variant === 'percentage' && typeof value === 'number'
      ? formatPercentage(value)
      : variant === 'number' && typeof value === 'number'
      ? formatNumber(value)
      : value

  return (
    <Card className={cn('relative overflow-hidden', className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {displayValue}
            </p>

            {trend && (
              <div className="flex items-center gap-1 mt-2">
                <span
                  className={cn(
                    'text-sm font-medium',
                    trend.isPositive ? 'text-green-600' : 'text-red-600'
                  )}
                >
                  {trend.isPositive ? '+' : '-'}
                  {Math.abs(trend.value)}%
                </span>
                <span className="text-sm text-muted-foreground">vs last month</span>
              </div>
            )}

            {target && (
              <p className="text-sm text-muted-foreground mt-2">
                Target: <span className="font-medium">{target}</span>
              </p>
            )}

            {description && (
              <p className="text-xs text-muted-foreground mt-2">{description}</p>
            )}
          </div>

          {Icon && (
            <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          )}
        </div>
      </CardContent>

      {/* Decorative gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
    </Card>
  )
}
