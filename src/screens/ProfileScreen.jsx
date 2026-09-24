import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import { useTripleTap } from '../hooks/useTripleTap';

export const ProfileScreen = ({ data, onOpenTiu, onSecretTrigger }) => {
  const [copied, setCopied] = useState(false);

  // Triple tap on the avatar or banner to trigger secret editor
  const handleTripleTap = useTripleTap(onSecretTrigger);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(data.student.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar bg-white flex flex-col pb-6">
      {/* Top Banner with Official Campus Illustration extending under Safe Area */}
      <div onClick={handleTripleTap} className="relative w-full shrink-0 cursor-pointer select-none">
        <div className="w-full h-[calc(155px+env(safe-area-inset-top,0px))] overflow-hidden bg-[#EFF4FF]">
          <img
            src="/images/campus_banner_perfil.png"
            alt="Campus UPC"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Circular Avatar overlapping the bottom edge of banner */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-14">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white shadow-md bg-slate-200">
            <img
              src={data.student.avatarUrl}
              alt="Foto del Alumno"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80";
              }}
            />
          </div>
        </div>
      </div>

      {/* Profile Details Container */}
      <div className="pt-16 px-6 text-center flex-1 flex flex-col">
        {/* Student Name with authentic Solano Gothic font on a single line */}
        <h1 
          className="font-solano font-extrabold text-[23px] sm:text-[28px] text-[#FB393C] uppercase tracking-wide leading-tight whitespace-nowrap overflow-hidden text-ellipsis"
          style={{ WebkitTextStroke: '0.2px #FB393C' }}
          title={data.student.fullName}
        >
          {data.student.fullName}
        </h1>

        {/* Degree */}
        <h2 className="font-bold text-[#3F4F6D] text-[14px] uppercase tracking-wide mt-1.5">
          {data.student.degree}
        </h2>

        {/* Campus Location */}
        <div className="flex items-center justify-center gap-1 text-slate-500 text-xs font-medium mt-1">
          <span className="text-[#E4002B] text-xs">📍</span>
          <span>{data.student.campus}</span>
        </div>

        {/* Institutional Email Pill with copy icon */}
        <div className="mt-4">
          <div
            onClick={handleCopyEmail}
            className="w-full bg-[#E8EDF6] hover:bg-[#DEE5F0] transition active:scale-[0.99] cursor-pointer rounded-lg py-2 px-3.5 flex items-center justify-center gap-2 relative shadow-2xs"
          >
            <span className="text-slate-700 text-xs font-medium">
              {data.student.email}
            </span>

            {/* Red document/copy icon */}
            <span className="text-[#E4002B] flex items-center justify-center">
              {copied ? (
                <Check size={13} className="text-emerald-600" />
              ) : (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H8C6.9 3 6 3.9 6 5V19C6 20.1 6.9 21 8 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H8V5H19V19ZM4 7H2V23C2 24.1 2.9 25 4 25H20V23H4V7Z"/>
                </svg>
              )}
            </span>

            {copied && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-0.5 px-2 rounded shadow-md animate-in fade-in">
                Copiado
              </span>
            )}
          </div>
        </div>

        {/* Student Codes */}
        <div className="mt-4 space-y-1 text-xs text-slate-600">
          <div>
            Código de alumno:{' '}
            <span className="font-bold text-[#3F4F6D]">{data.student.studentCode}</span>
          </div>
          <div>
            ID Banner:{' '}
            <span className="font-bold text-[#3F4F6D]">{data.student.idBanner}</span>
          </div>
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="h-[1px] bg-slate-200 my-5" />

        {/* TIU VIRTUAL Card Button */}
        <div
          onClick={onOpenTiu}
          className="w-full bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 flex items-center justify-between cursor-pointer hover:shadow-md transition active:scale-[0.99] group"
        >
          <div className="flex items-center gap-3">
            {/* ID Badge Icon */}
            <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="12" cy="9" r="3" />
                <path d="M7 17C7 15 9 14 12 14C15 14 17 15 17 17" />
              </svg>
            </div>
            <span 
              className="font-solano font-bold text-xl text-slate-900 tracking-wide uppercase pt-0.5"
              style={{ WebkitTextStroke: '0.2px #1a1a1a' }}
            >
              TIU VIRTUAL
            </span>
          </div>

          {/* Red Chevron */}
          <ChevronRight size={22} className="text-[#E4002B] stroke-[2.5]" />
        </div>

        {/* Legal Disclaimer Links */}
        <div className="mt-5 px-1">
          <p className="text-[11px] leading-relaxed text-slate-600">
            Revisa los{' '}
            <span className="text-[#2563EB] font-bold underline cursor-pointer">
              Términos y condiciones
            </span>
            ,{' '}
            <span className="text-[#2563EB] font-bold underline cursor-pointer">
              Política de privacidad
            </span>{' '}
            y el{' '}
            <span className="text-[#2563EB] font-bold underline cursor-pointer">
              Portal PDP y Derechos ARCO
            </span>{' '}
            de la aplicación.
          </p>
        </div>

        {/* Cerrar Sesión Button */}
        <div className="mt-7">
          <button
            className="w-full py-3.5 bg-white border border-[#E4002B] text-[#E4002B] hover:bg-red-50/50 font-bold text-sm rounded-2xl transition active:scale-[0.98]"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};
