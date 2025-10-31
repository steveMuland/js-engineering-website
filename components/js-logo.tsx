export function JSLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Circle border */}
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="3" fill="none" />

        {/* J letter */}
        <path
          d="M35 30 L35 55 Q35 65 42 65 L45 65"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* S letter with diagonal lines */}
        <path
          d="M55 35 Q60 30 65 35 L70 45 M70 45 L55 60 M55 60 Q50 65 55 70"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Diagonal accent lines */}
        <line x1="58" y1="32" x2="62" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="63" y1="35" x2="67" y2="31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="68" y1="38" x2="72" y2="34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  )
}
