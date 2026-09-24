import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useTripleTap } from '../hooks/useTripleTap';

export const TiuVirtualScreen = ({ data, onBack, onSecretTrigger }) => {
  // Real live time and date sync matching the actual device time
  const formatTime = (date) => {
    const hh = date.getHours().toString().padStart(2, '0');
    const mm = date.getMinutes().toString().padStart(2, '0');
    const ss = date.getSeconds().toString().padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
  };

  const getFormattedDate = (date) => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'];
    const dayName = days[date.getDay()];
    const dayNum = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dayName}, ${dayNum} ${monthName} ${year}`;
  };

  const [currentTime, setCurrentTime] = useState(() => formatTime(new Date()));
  const [dateString, setDateString] = useState(() => getFormattedDate(new Date()));

  // Triple tap on TIU VIRTUAL title triggers secret editor
  const handleTitleTripleTap = useTripleTap(onSecretTrigger);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(formatTime(now));
      setDateString(getFormattedDate(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col bg-[#F9FAFE] relative overflow-hidden select-none">
      {/* Background vector landscape from official assets */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Seamless sky upper background */}
        <div className="absolute inset-0 bg-[#F9FAFE]" />

        {/* Real UPC campus panorama artwork positioned behind student card */}
        <div className="absolute bottom-0 left-0 right-0 h-[48%] min-h-[340px] pointer-events-none select-none overflow-hidden">
          <img
            src="/images/background.png"
            alt="Campus UPC"
            className="w-full h-full object-cover object-[81%_bottom] opacity-95 pointer-events-none select-none"
          />
        </div>

        {/* Animated clouds layer */}
        <div className="absolute top-0 left-0 w-[200%] h-full animate-clouds flex pointer-events-none opacity-85">
          {/* Loop section 1 */}
          <div className="relative w-1/2 h-full shrink-0">
            <img src="/images/cloud.svg" alt="" className="absolute top-[35%] left-[2%] w-[70px] h-auto" />
            <img src="/images/cloud.svg" alt="" className="absolute top-[42%] left-[5%] w-[85px] h-auto" />
            <img src="/images/cloud.svg" alt="" className="absolute top-[38%] left-[40%] w-[60px] h-auto" />
            <img src="/images/cloud.svg" alt="" className="absolute top-[33%] right-[18%] w-[75px] h-auto" />
            <img src="/images/cloud.svg" alt="" className="absolute top-[40%] right-[5%] w-[90px] h-auto" />
            <img src="/images/cloud.svg" alt="" className="absolute top-[46%] right-[25%] w-[65px] h-auto" />
          </div>
          {/* Loop section 2 */}
          <div className="relative w-1/2 h-full shrink-0">
            <img src="/images/cloud.svg" alt="" className="absolute top-[35%] left-[2%] w-[70px] h-auto" />
            <img src="/images/cloud.svg" alt="" className="absolute top-[42%] left-[5%] w-[85px] h-auto" />
            <img src="/images/cloud.svg" alt="" className="absolute top-[38%] left-[40%] w-[60px] h-auto" />
            <img src="/images/cloud.svg" alt="" className="absolute top-[33%] right-[18%] w-[75px] h-auto" />
            <img src="/images/cloud.svg" alt="" className="absolute top-[40%] right-[5%] w-[90px] h-auto" />
            <img src="/images/cloud.svg" alt="" className="absolute top-[46%] right-[25%] w-[65px] h-auto" />
          </div>
        </div>
      </div>

      {/* Top Header Bar with Circular Floating Back Button and Title (Safe Area Aware) */}
      <div className="flex items-center gap-3 px-5 pt-[calc(env(safe-area-inset-top,0px)+6px)] pb-1 z-20 shrink-0">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-100/60 flex items-center justify-center text-[#E4002B] hover:opacity-90 active:scale-90 transition-transform"
          title="Regresar"
        >
          <ChevronLeft size={24} strokeWidth={2.8} />
        </button>
        <h2 
          onClick={handleTitleTripleTap}
          className="font-solano font-bold text-[25px] sm:text-[27px] text-[#1a1a1a] tracking-wide pt-0.5 cursor-pointer active:scale-95 transition-transform select-none" 
          style={{ WebkitTextStroke: '0.2px #1a1a1a' }}
        >
          TIU VIRTUAL
        </h2>
      </div>

      {/* Content Container (Safe Area Bottom Aware) */}
      <div className="flex-1 flex flex-col items-center justify-between z-10 px-4 pt-0.5 pb-[calc(env(safe-area-inset-bottom,0px)+12px)] overflow-y-auto no-scrollbar">
        {/* Security Digital Clock and Date (Close to header just like official app) */}
        <div className="text-center w-full flex flex-col items-center mt-1 shrink-0">
          <div 
            className="bg-[#DBD9FF] rounded-[14px] px-8 py-1.5 shadow-2xs min-w-[230px]"
          >
            <div 
              className="font-applied text-[42px] leading-tight font-medium text-[#1a1a1a] tracking-wide"
              style={{ WebkitTextStroke: '0.3px #1a1a1a' }}
            >
              {currentTime}
            </div>
          </div>
          <p 
            className="font-applied text-[17px] font-semibold text-[#525768] mt-1.5"
            style={{ WebkitTextStroke: '0.2px #525768' }}
          >
            {dateString}
          </p>
        </div>

        {/* Center Student Avatar Photo (Proportional & centered) */}
        <div className="my-auto py-1 shrink">
          <div className="w-[155px] h-[155px] sm:w-[165px] sm:h-[165px] rounded-full overflow-hidden ring-[4px] ring-white shadow-xl bg-slate-200">
            <img
              src={data.student.avatarUrl}
              alt="Foto del Alumno TIU"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80";
              }}
            />
          </div>
        </div>

        {/* Floating Bottom Student Info Card (Large & Prominent matching official app) */}
        <div className="w-full max-w-[365px] bg-white rounded-[22px] px-6 py-5 sm:py-6 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] border border-slate-100/90 text-center mb-1">
          {/* Student Name on a single bold line */}
          <h1 
            className="font-solano font-extrabold text-[28px] sm:text-[32px] text-[#FB393C] uppercase leading-tight tracking-wide whitespace-nowrap overflow-hidden text-ellipsis"
            style={{ WebkitTextStroke: '0.2px #FB393C' }}
            title={data.student.fullName}
          >
            {data.student.fullName}
          </h1>

          {/* Student Codes */}
          <div className="mt-3.5 space-y-2 text-center">
            <div>
              <p className="text-[#2a2a2a] text-[13.5px] font-medium leading-none">
                Código de alumno:
              </p>
              <p className="text-[#3F4F6D] text-[16.5px] font-bold mt-0.5 leading-snug">
                {data.student.tiuStudentCode || `U${data.student.studentCode}`}
              </p>
            </div>

            <div className="pt-0.5">
              <p className="text-[#2a2a2a] text-[13.5px] font-medium leading-none">
                ID Banner:
              </p>
              <p className="text-[#3F4F6D] text-[16.5px] font-bold mt-0.5 leading-snug">
                {data.student.idBanner}
              </p>
            </div>
          </div>

          {/* Degree */}
          <div className="mt-3.5 pt-0.5">
            <h3 className="text-[#3F4F6D] font-bold text-[15px] uppercase tracking-wide text-center">
              {data.student.degree}
            </h3>

            {/* Campus */}
            <div className="flex items-center justify-center gap-1 text-[#0a0c10] text-[13.5px] sm:text-[14px] font-medium mt-1">
              <span className="text-[12px]">📍</span>
              <span>{data.student.campus}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
