import { Iconarrowright } from './figma-icons';
import { motion } from 'motion/react';

export function Button1({ className, children = "Shop Now", onClick }: { className?: string; children?: React.ReactNode; onClick?: () => void }) {
  return (
    <motion.button 
      className={`bg-white text-black px-10 py-4 rounded-lg font-['Inter:Medium',sans-serif] hover:bg-gray-100 transition ${className || ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export function Button12({ className }: { className?: string }) {
  return <Button1 className={className} />;
}

export function Button13({ className }: { className?: string }) {
  return <Button1 className={className} />;
}

export function ElementsNavigationLink3({ className }: { className?: string }) {
  return (
    <div className={`content-stretch flex gap-[2px] items-center relative shrink-0 ${className || ''}`} data-name="Elements/Navigation/Link">
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-0 border-[#141718] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
          <p className="font-['Space_Grotesk:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#141718] text-[14px] text-nowrap whitespace-pre">Contact Us</p>
        </div>
      </div>
    </div>
  );
}
