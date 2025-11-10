import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function TimerBlocks({ className, value = "02", label = "Days" }: { className?: string; value?: string; label?: string }) {
  const [prevValue, setPrevValue] = useState(value);
  
  useEffect(() => {
    if (value !== prevValue) {
      setPrevValue(value);
    }
  }, [value, prevValue]);

  return (
    <div className={`flex flex-col items-center gap-2 ${className || ''}`}>
      <motion.div 
        className="bg-white size-[60px] rounded flex items-center justify-center overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <AnimatePresence mode="wait">
          <motion.p 
            key={value}
            className="font-['Poppins:Medium',sans-serif] text-[34px] leading-[38px] text-[#141718] tracking-[-0.6px]"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {value}
          </motion.p>
        </AnimatePresence>
      </motion.div>
      <p className="text-white text-xs">{label}</p>
    </div>
  );
}

export function TimerBlocks1({ className, value = "12", label = "Hours" }: { className?: string; value?: string; label?: string }) {
  return <TimerBlocks className={className} value={value} label={label} />;
}

export function TimerBlocks2({ className, value = "45", label = "Minutes" }: { className?: string; value?: string; label?: string }) {
  return <TimerBlocks className={className} value={value} label={label} />;
}

export function TimerBlocks3({ className, value = "05", label = "Seconds" }: { className?: string; value?: string; label?: string }) {
  return <TimerBlocks className={className} value={value} label={label} />;
}

export function Timer({ className }: { className?: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 5
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex gap-4 ${className || ''}`}>
      <TimerBlocks value={String(timeLeft.days).padStart(2, '0')} label="Days" />
      <TimerBlocks1 value={String(timeLeft.hours).padStart(2, '0')} label="Hours" />
      <TimerBlocks2 value={String(timeLeft.minutes).padStart(2, '0')} label="Minutes" />
      <TimerBlocks3 value={String(timeLeft.seconds).padStart(2, '0')} label="Seconds" />
    </div>
  );
}
