import React from 'react';
import { Laptop, Phone, ChevronRight, MessageCircle } from 'lucide-react';

export const AyudaScreen = () => {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar bg-[#F5F7FB] px-6 pt-[calc(env(safe-area-inset-top,0px)+16px)] pb-6 flex flex-col">
      {/* Title Header */}
      <div>
        <h1 
          className="font-solano font-bold text-[28px] text-[#E4002B] uppercase tracking-wide leading-tight"
          style={{ WebkitTextStroke: '0.2px #E4002B' }}
        >
          ¿NECESITAS AYUDA?
        </h1>
        <p className="text-slate-600 font-medium text-[15px] mt-1.5">
          Resuelve tus consultas fácil y rápido
        </p>
      </div>

      {/* Action Cards Container */}
      <div className="mt-6 space-y-3.5">
        {/* Card 1: EXPLORA UPC */}
        <div 
          onClick={() => window.open('https://explora.upc.edu.pe', '_blank')}
          className="w-full bg-white rounded-2xl p-4 shadow-sm border border-slate-100/80 flex items-center justify-between cursor-pointer hover:shadow-md transition active:scale-[0.99] group"
        >
          <div className="flex items-start gap-3.5">
            <div className="pt-0.5 text-slate-800">
              <Laptop size={22} strokeWidth={1.8} />
            </div>
            <div>
              <h3 
                className="font-solano font-bold text-[17px] text-slate-900 tracking-wide uppercase leading-tight"
                style={{ WebkitTextStroke: '0.1px #000' }}
              >
                EXPLORA UPC
              </h3>
              <p className="text-slate-500 text-xs font-normal mt-1 leading-snug pr-2">
                Nuestra base de conocimiento disponible las 24 horas
              </p>
            </div>
          </div>
          <ChevronRight size={22} className="text-[#E4002B] stroke-[2.5] shrink-0" />
        </div>

        {/* Card 2: ALMA WHATSAPP */}
        <div 
          onClick={() => window.open('https://wa.me/51914000000', '_blank')}
          className="w-full bg-white rounded-2xl p-4 shadow-sm border border-slate-100/80 flex items-center justify-between cursor-pointer hover:shadow-md transition active:scale-[0.99] group"
        >
          <div className="flex items-start gap-3.5">
            <div className="pt-0.5 text-slate-800">
              {/* Alma avatar icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
                <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
                <path d="M7 10C7 7 9 5 12 5s5 2 5 5" />
              </svg>
            </div>
            <div>
              <h3 
                className="font-solano font-bold text-[17px] text-slate-900 tracking-wide uppercase leading-tight"
                style={{ WebkitTextStroke: '0.1px #000' }}
              >
                ALMA WHATSAPP
              </h3>
              <p className="text-slate-500 text-xs font-normal mt-1 leading-snug">
                Lun -Vie de 9:00 am a 9:00 pm<br />
                Sábado de 9:00 am - 2:00 pm
              </p>
            </div>
          </div>
          <ChevronRight size={22} className="text-[#E4002B] stroke-[2.5] shrink-0" />
        </div>

        {/* Card 3: CANAL TELEFÓNICO */}
        <div 
          onClick={() => alert("Central Telefónica UPC: (01) 313-3333")}
          className="w-full bg-white rounded-2xl p-4 shadow-sm border border-slate-100/80 flex items-center justify-between cursor-pointer hover:shadow-md transition active:scale-[0.99] group"
        >
          <div className="flex items-start gap-3.5">
            <div className="pt-0.5 text-slate-800">
              <Phone size={22} strokeWidth={1.8} />
            </div>
            <div>
              <h3 
                className="font-solano font-bold text-[17px] text-slate-900 tracking-wide uppercase leading-tight"
                style={{ WebkitTextStroke: '0.1px #000' }}
              >
                CANAL TELEFÓNICO
              </h3>
              <p className="text-slate-500 text-xs font-normal mt-1 leading-snug">
                Lun -Vie de 9:00 am a 9:00 pm<br />
                Sábado de 9:00 am - 2:00 pm
              </p>
            </div>
          </div>
          <ChevronRight size={22} className="text-[#E4002B] stroke-[2.5] shrink-0" />
        </div>

        {/* Card 4: COMPARTE TU EXPERIENCIA (Purple highlighted card) */}
        <div 
          onClick={() => alert("¡Gracias por compartir tu experiencia en Mi UPC App!")}
          className="w-full bg-[#2A1578] rounded-2xl p-4 text-white shadow-sm flex items-center justify-between cursor-pointer hover:bg-[#341C8F] transition active:scale-[0.99] group"
        >
          <div className="flex items-start gap-3.5">
            <div className="pt-0.5 text-xl select-none">
              ❤️
            </div>
            <div>
              <h3 
                className="font-solano font-bold text-[17px] text-white tracking-wide uppercase leading-tight"
                style={{ WebkitTextStroke: '0.1px #fff' }}
              >
                COMPARTE TU EXPERIENCIA
              </h3>
              <p className="text-white/80 text-xs font-normal mt-1 leading-snug pr-2">
                Califícanos y danos tu opinión sobre la aplicación
              </p>
            </div>
          </div>
          <ChevronRight size={22} className="text-[#E4002B] stroke-[2.5] shrink-0" />
        </div>
      </div>
    </div>
  );
};
