import React from 'react';

// Official UPC Flame Emblem Logo
export const UpcFlame = ({ size = 25, className = "" }) => (
  <img 
    src="/images/upc.png" 
    alt="UPC" 
    style={{ width: size, height: size }}
    className={`object-contain select-none shrink-0 ${className}`}
  />
);

// 3D Pink Clock Icon for HORARIOS (Screenshot 1)
export const Clock3DIcon = ({ size = 26 }) => (
  <div 
    className="relative flex items-center justify-center rounded-full shrink-0 shadow-sm"
    style={{ 
      width: size, 
      height: size, 
      background: 'linear-gradient(145deg, #FF6F96 0%, #FF2A6D 50%, #C80D4C 100%)',
    }}
  >
    <div className="w-[74%] h-[74%] rounded-full bg-white flex items-center justify-center relative shadow-inner">
      {/* Clock hands */}
      <div className="absolute w-[2px] h-[34%] bg-[#FF2A6D] top-[20%] left-[calc(50%-1px)] origin-bottom rounded-full" />
      <div className="absolute w-[28%] h-[2px] bg-slate-800 right-[25%] top-[calc(50%-1px)] origin-left rounded-full" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#FF2A6D] z-10" />
    </div>
  </div>
);

// 3D Stacked Books Icon for CURSOS (Screenshot 1)
export const Books3DIcon = ({ size = 26 }) => (
  <div 
    className="relative flex items-center justify-center shrink-0"
    style={{ width: size, height: size }}
  >
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      {/* Bottom book - Blue */}
      <path d="M4 22L16 27L28 22L24 19L16 22L8 19L4 22Z" fill="#1D4ED8"/>
      <path d="M4 20L16 25L28 20L28 22L16 27L4 22V20Z" fill="#3B82F6"/>
      {/* Middle book - Purple */}
      <path d="M4 16L16 21L28 16L24 13L16 16L8 13L4 16Z" fill="#7C3AED"/>
      <path d="M4 14L16 19L28 14L28 16L16 21L4 16V14Z" fill="#A78BFA"/>
      {/* Top book - Red/Coral */}
      <path d="M4 10L16 15L28 10L16 5L4 10Z" fill="#EF4444"/>
      <path d="M4 8L16 13L28 8L28 10L16 15L4 10V8Z" fill="#DC2626"/>
      {/* White pages */}
      <path d="M28 8L16 13L16 15L28 10V8Z" fill="#FFF5F5"/>
    </svg>
  </div>
);

// Blackboard 'Bb' Monitor Icon for Aula Virtual (Screenshot 1)
export const BlackboardIcon = ({ size = 38 }) => (
  <div 
    className="flex items-center justify-center rounded-xl bg-[#E2E8F0] p-1.5 shadow-2xs"
    style={{ width: size, height: size }}
  >
    <div className="w-full h-full bg-[#33383F] rounded-lg flex flex-col items-center justify-center p-1 border border-slate-400/40 relative">
      <div className="w-full h-full bg-[#181D1A] rounded flex items-center justify-center shadow-inner">
        <span className="text-[#FFD166] font-serif font-black text-[11px] tracking-tight">Bb</span>
      </div>
      <div className="w-2.5 h-0.5 bg-slate-400 mt-0.5 rounded-full" />
    </div>
  </div>
);

// Magnifying Glass 3D Icon for Explora UPC (Screenshot 1)
export const ExploraIcon = ({ size = 38 }) => (
  <div 
    className="flex items-center justify-center"
    style={{ width: size, height: size }}
  >
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <defs>
        <radialGradient id="lensGrad" cx="38%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="60%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </radialGradient>
        <linearGradient id="handleGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
      </defs>
      <rect x="25" y="27" width="6.5" height="14" rx="3.25" transform="rotate(-45 25 27)" fill="url(#handleGrad)" />
      <circle cx="18" cy="18" r="13" fill="#CBD5E1" />
      <circle cx="18" cy="18" r="10" fill="url(#lensGrad)" />
      <ellipse cx="15" cy="15" rx="3.5" ry="1.8" transform="rotate(-30 15 15)" fill="#FFFFFF" opacity="0.75" />
    </svg>
  </div>
);

// Shopping Cart 3D Icon for Tienda Online UPC (Screenshot 1)
export const TiendaCartIcon = ({ size = 38 }) => (
  <div 
    className="flex items-center justify-center"
    style={{ width: size, height: size }}
  >
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <defs>
        <linearGradient id="cartFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
      </defs>
      <path d="M10 13H34L30 26H14L10 13Z" fill="url(#cartFill)" opacity="0.85" />
      <path d="M6 9H10L14 26H31" stroke="#BE185D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="16" y1="17" x2="28" y2="17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="22" x2="26" y2="22" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="31" r="2.8" fill="#334155" />
      <circle cx="28" cy="31" r="2.8" fill="#334155" />
    </svg>
  </div>
);

// Welcome banner students illustration (exact style as in Screenshot 1)
export const WelcomeStudentsIllustration = () => (
  <div className="relative w-36 h-24 flex items-end justify-end select-none pointer-events-none shrink-0">
    <svg viewBox="0 0 160 120" className="w-full h-full overflow-visible" fill="none">
      {/* Background office frame */}
      <rect x="70" y="25" width="60" height="70" rx="3" stroke="#CBD5E1" strokeWidth="1.5" fill="#F8FAFC" />
      <line x1="70" y1="50" x2="130" y2="50" stroke="#E2E8F0" strokeWidth="1" />

      {/* Girl waving (left) */}
      <g>
        {/* Arm waving up */}
        <path d="M25 40C23 34 27 30 31 31C35 32 37 36 34 41L42 56L37 59L25 40Z" fill="#FBCFE8" />
        {/* Body purple */}
        <path d="M42 66C38 75 36 98 36 112H68C68 98 66 75 62 66C58 60 46 60 42 66Z" fill="#6366F1" />
        {/* Head */}
        <circle cx="52" cy="44" r="13" fill="#FBCFE8" />
        {/* Hair - purple styled */}
        <path d="M39 42C38 31 46 27 53 27C63 27 67 33 66 43C65 46 62 48 62 48C59 36 53 33 46 36C42 38 40 44 39 42Z" fill="#312E81" />
        {/* Face features */}
        <circle cx="48" cy="44" r="1.4" fill="#1E293B" />
        <circle cx="56" cy="44" r="1.4" fill="#1E293B" />
        <path d="M50 48C51 50 53 50 54 48" stroke="#E11D48" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* Boy in red jacket with phone (right) */}
      <g>
        {/* Red Jacket */}
        <path d="M78 68C72 78 70 98 70 112H112C112 98 110 78 104 68C98 61 84 61 78 68Z" fill="#DC2626" />
        {/* Inner dark shirt */}
        <path d="M85 66L91 84L97 66Z" fill="#0F172A" />
        {/* Head */}
        <circle cx="91" cy="40" r="13" fill="#FDE68A" />
        {/* Dark Hair */}
        <path d="M78 37C77 26 85 22 93 22C102 22 106 27 105 36C103 34 100 32 94 32C87 32 83 35 78 37Z" fill="#0F172A" />
        {/* Face features */}
        <circle cx="87" cy="40" r="1.4" fill="#1E293B" />
        <circle cx="95" cy="40" r="1.4" fill="#1E293B" />
        <path d="M89 45C90 47 92 47 93 45" stroke="#B45309" strokeWidth="1.2" strokeLinecap="round" />
        {/* Phone in hand */}
        <rect x="68" y="75" width="9" height="15" rx="2" fill="#334155" />
      </g>
    </svg>
  </div>
);

// Campus illustration banner for Profile and TIU (Screenshot 2 and 3)
export const CampusVectorBanner = ({ height = 150 }) => (
  <div className="w-full relative overflow-hidden select-none pointer-events-none" style={{ height }}>
    <svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EFF4FF" />
          <stop offset="100%" stopColor="#DCE5FC" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="400" height="150" fill="url(#sky)" />

      {/* Clouds */}
      <g opacity="0.8">
        <path d="M50 35C52 30 58 28 63 30C67 26 74 28 76 32C81 32 85 36 84 41C84 43 81 45 78 45H54C48 45 46 40 50 35Z" fill="#FFFFFF" />
        <path d="M300 25C302 21 307 19 312 21C316 17 323 19 325 23C329 23 333 26 332 30C332 32 329 34 326 34H305C301 34 299 30 300 25Z" fill="#FFFFFF" />
        <path d="M180 50C182 46 186 44 190 45C193 42 199 43 200 46C204 46 208 49 206 52C206 54 203 56 201 56H182C178 56 177 53 180 50Z" fill="#FFFFFF" opacity="0.7" />
      </g>

      {/* Campus Building - Right center */}
      <g transform="translate(190, 30)">
        {/* Main Pavilion body */}
        <rect x="25" y="28" width="85" height="70" fill="#E2E9FB" rx="2" />
        {/* Pediment (triangle roof) */}
        <path d="M20 28 L67.5 10 L115 28 Z" fill="#CBD8F7" />
        {/* Crest circle with UPC flame */}
        <circle cx="67.5" cy="20" r="7" fill="#FFFFFF" />
        <path d="M67.5 15C67.5 19 64.5 21 64.5 24C64.5 26 65.5 27 67.5 27C69.5 27 70.5 26 70.5 24C70.5 21 68.5 20 67.5 15Z" fill="#E4002B" />

        {/* Pillars */}
        <rect x="33" y="36" width="9" height="58" fill="#BACBF5" rx="1" />
        <rect x="52" y="36" width="9" height="58" fill="#BACBF5" rx="1" />
        <rect x="75" y="36" width="9" height="58" fill="#BACBF5" rx="1" />
        <rect x="94" y="36" width="9" height="58" fill="#BACBF5" rx="1" />

        {/* Windows */}
        <rect x="44" y="42" width="6" height="34" fill="#8FA5E2" opacity="0.5" />
        <rect x="64" y="42" width="9" height="34" fill="#8FA5E2" opacity="0.5" />
        <rect x="86" y="42" width="6" height="34" fill="#8FA5E2" opacity="0.5" />

        {/* Entrance Door */}
        <rect x="58" y="78" width="20" height="20" fill="#758FD6" opacity="0.7" rx="1" />

        {/* Side building wings */}
        <rect x="-35" y="48" width="55" height="48" fill="#D6E0F8" rx="2" />
        <rect x="-26" y="55" width="12" height="15" fill="#9FB5E8" opacity="0.5" />
        <rect x="-8" y="55" width="12" height="15" fill="#9FB5E8" opacity="0.5" />

        <rect x="114" y="48" width="70" height="48" fill="#D6E0F8" rx="2" />
        <rect x="124" y="55" width="12" height="15" fill="#9FB5E8" opacity="0.5" />
        <rect x="144" y="55" width="12" height="15" fill="#9FB5E8" opacity="0.5" />
      </g>

      {/* Stylized trees - Left side (Screenshot 2) */}
      <g transform="translate(30, 45)">
        <line x1="18" y1="35" x2="18" y2="85" stroke="#A6BAE8" strokeWidth="3" strokeLinecap="round" />
        <circle cx="18" cy="35" r="26" fill="#C5D5F7" opacity="0.85" />
        <circle cx="10" cy="37" r="16" fill="#BACBF2" opacity="0.65" />
        <circle cx="26" cy="39" r="14" fill="#B3C4EF" opacity="0.75" />
      </g>

      <g transform="translate(85, 70)">
        <line x1="12" y1="20" x2="12" y2="55" stroke="#A6BAE8" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="12" cy="20" r="16" fill="#BACBF2" opacity="0.85" />
      </g>

      <g transform="translate(130, 75)">
        <line x1="10" y1="16" x2="10" y2="48" stroke="#A6BAE8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="16" r="12" fill="#B3C4EF" opacity="0.7" />
      </g>
    </svg>
  </div>
);
