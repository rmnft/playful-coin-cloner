import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const AnimatedValue: React.FC<StatProps> = ({ value, prefix = '', suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        setDisplayValue(Math.floor(progress * value));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
      controls.start({ scale: 1, opacity: 1 });
    }
  }, [inView, value, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={controls}
      className="text-4xl font-bold text-red-500"
    >
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </motion.div>
  );
};

const Stat: React.FC<StatProps> = (props) => {
  return (
    <div className="glass-card p-6 text-center">
      <AnimatedValue {...props} />
      <div className="mt-2 text-gray-400">{props.label}</div>
    </div>
  );
};

export const AnimatedStats: React.FC = () => {
  const stats = [
    { value: 1000, label: 'Total Tokens Created', suffix: '+' },
    { value: 2500000, label: 'Total Market Cap', prefix: '$' },
    { value: 100, label: 'Active Users', suffix: '+' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Stat key={index} {...stat} />
      ))}
    </div>
  );
};

export default AnimatedStats;
