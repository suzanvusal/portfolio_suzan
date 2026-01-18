import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Metric {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export default function MetricsCard() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const metrics: Metric[] = [
    { value: "50", label: "Servers Migrated to AWS", suffix: "+" },
    { value: "99.9", label: "Uptime Achieved", suffix: "%" },
    { value: "25", label: "Cost Reduction", suffix: "%" },
    { value: "15", label: "AWS Accounts Managed", suffix: "+" },
  ];

  return (
    <div ref={ref} className="w-full my-8 md:my-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, index) => (
          <MetricItem
            key={index}
            metric={metric}
            inView={inView}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
}

interface MetricItemProps {
  metric: Metric;
  inView: boolean;
  delay: number;
}

function MetricItem({ metric, inView, delay }: MetricItemProps) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;

    const timeout = setTimeout(() => {
      const target = parseFloat(metric.value);
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [inView, metric.value, delay]);

  const displayValue = metric.value.includes('.') 
    ? count.toFixed(1) 
    : Math.floor(count);

  return (
    <div className="group relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
          {metric.prefix}
          {displayValue}
          {metric.suffix}
        </div>
        <div className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium">
          {metric.label}
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}