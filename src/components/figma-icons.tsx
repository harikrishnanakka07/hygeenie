import { ChevronDown, ArrowRight, X, Mail, Percent, ChevronLeft, ChevronRight } from 'lucide-react';

export function Ticketpercent({ className }: { className?: string }) {
  return <Percent className={className} />;
}

export function Iconarrowright({ className }: { className?: string }) {
  return <ArrowRight className={`size-5 ${className || ''}`} />;
}

export function Iconarrowright1({ className }: { className?: string }) {
  return <ArrowRight className={`size-5 ${className || ''}`} />;
}

export function Iconarrowright2({ className }: { className?: string }) {
  return <ArrowRight className={`size-5 ${className || ''}`} />;
}

export function Iconarrowright3({ className }: { className?: string }) {
  return <ArrowRight className={`size-5 ${className || ''}`} />;
}

export function Iconarrowright4({ className }: { className?: string }) {
  return <ArrowRight className={`size-5 ${className || ''}`} />;
}

export function Iconarrowright5({ className }: { className?: string }) {
  return <ArrowRight className={`size-5 ${className || ''}`} />;
}

export function Iconarrowright6({ className }: { className?: string }) {
  return <ArrowRight className={`size-5 ${className || ''}`} />;
}

export function Iconarrowright7({ className }: { className?: string }) {
  return <ArrowRight className={`size-5 ${className || ''}`} />;
}

export function Iconclose({ className }: { className?: string }) {
  return <X className={`size-5 cursor-pointer ${className || ''}`} />;
}

export function Iconchevrondown({ className }: { className?: string }) {
  return <ChevronDown className={`size-4 ${className || ''}`} />;
}

export function Iconchevrondown1({ className }: { className?: string }) {
  return <ChevronDown className={`size-4 ${className || ''}`} />;
}

export function Iconemail({ className }: { className?: string }) {
  return <Mail className={`size-5 ${className || ''}`} />;
}

export function IconChevronLeft({ className }: { className?: string }) {
  return <ChevronLeft className={`size-6 ${className || ''}`} />;
}

export function IconChevronRight({ className }: { className?: string }) {
  return <ChevronRight className={`size-6 ${className || ''}`} />;
}

export function Socialoutlineinstagram({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}

export function Socialoutlinefacebook({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    </div>
  );
}

export function Socialoutlineyoutube({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
      </svg>
    </div>
  );
}
