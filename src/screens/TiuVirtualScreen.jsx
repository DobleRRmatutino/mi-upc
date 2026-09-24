import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useTripleTap } from '../hooks/useTripleTap';

export const TiuVirtualScreen = ({ data, onBack, onSecretTrigger }) => {
  // Live dynamic ticking clock starting at 09:21:40 or current time
  const [currentTime, setCurrentTime] = useState("09:21:40");
  const [dateString, setDateString] = useState("Jueves, 24 Sept 2026");

  // Triple tap on TIU VIRTUAL title triggers secret editor
  const handleTitleTripleTap = useTripleTap(onSecretTrigger);

  useEffect(() => {
    let secondsCount = 40;
    let minutesCount = 21;
    let hoursCount = 9;

    const timer = setInterval(() => {
      secondsCount++;
      if (secondsCount >= 60) {
        secondsCount = 0;
        minutesCount++;
        if (minutesCount >= 60) {
          minutesCount = 0;
          hoursCount++;
          if (hoursCount >= 24) hoursCount = 0;
        }
      }
      const hh = hoursCount.toString().padStart(2, '0');
      const mm = minutesCount.toString().padStart(2, '0');
      const ss = secondsCount.toString().padStart(2, '0');
      setCurrentTime(`${hh}:${mm}:${ss}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col bg-[#F9FAFE] relative overflow-hidden select-none pb-6">
      {/* Background vector landscape from official assets */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Sky upper part */}
        <div className="absolute top-0 left-0 right-0 h-[70%] bg-[#F9FAFE]" />
        {/* Soft lavender lower part */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-[#E9ECFF]" />

        {/* Real UPC campus building artwork */}
        <img
          src="/images/background.png"
          alt=""
          className="absolute bottom-0 left-0 right-0 w-full h-auto object-cover object-bottom opacity-90"
        />

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

      {/* Top Header Bar with Back Button and Title */}
      <div className="flex items-center gap-2 px-4 pt-3 pb-2 z-20">
        <button
          onClick={onBack}
          className="p-1 text-[#E30613] hover:opacity-80 active:scale-95 transition"
          title="Regresar"
        >
          <ChevronLeft size={28} strokeWidth={2.8} />
        </button>
        <h2 
          onClick={handleTitleTripleTap}
          className="font-solano font-bold text-[26px] text-[#1a1a1a] tracking-wide pt-0.5 cursor-pointer active:scale-95 transition-transform" 
          style={{ WebkitTextStroke: '0.2px #1a1a1a' }}
        >
          TIU VIRTUAL
        </h2>
      </div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col items-center justify-between z-10 px-5 pt-1">
        {/* Security Digital Clock and Date */}
        <div className="text-center w-full flex flex-col items-center">
          <div 
            className="bg-[#DBD9FF] rounded-[12px] px-8 py-1 shadow-2xs min-w-[220px]"
          >
            <div 
              className="font-applied text-[38px] leading-tight font-medium text-[#1a1a1a] tracking-wide"
              style={{ WebkitTextStroke: '0.3px #1a1a1a' }}
            >
              {currentTime}
            </div>
          </div>
          <p 
            className="font-applied text-[17px] font-semibold text-[#5b5b5f] mt-2.5"
            style={{ WebkitTextStroke: '0.2px #5b5b5f' }}
          >
            {dateString}
          </p>
        </div>

        {/* Center Student Avatar Photo */}
        <div className="my-auto py-2">
          <div className="w-[155px] h-[155px] rounded-full overflow-hidden ring-[3.5px] ring-white shadow-xl bg-slate-200">
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

        {/* Floating Bottom Student Info Card */}
        <div className="w-full max-w-[340px] bg-white rounded-[12px] px-5 py-4 shadow-[0px_1px_4px_rgba(0,0,0,0.06)] border border-slate-100 text-center mb-1">
          {/* Student Name */}
          <h1 
            className="font-solano font-extrabold text-[36px] text-[#FB393C] uppercase leading-tight tracking-wide"
            style={{ WebkitTextStroke: '0.2px #FB393C' }}
          >
            {data.student.fullName}
          </h1>

          {/* Student Codes */}
          <div className="mt-3 space-y-1.5 text-center">
            <div>
              <p className="text-[#2a2a2a] text-[13px] font-medium leading-none">
                Código de alumno:
              </p>
              <p className="text-[#3F4F6D] text-[15px] font-bold mt-0.5 leading-snug">
                {data.student.tiuStudentCode || `U${data.student.studentCode}`}
              </p>
            </div>

            <div className="pt-0.5">
              <p className="text-[#2a2a2a] text-[13px] font-medium leading-none">
                ID Banner:
              </p>
              <p className="text-[#3F4F6D] text-[15px] font-bold mt-0.5 leading-snug">
                {data.student.idBanner}
              </p>
            </div>
          </div>

          {/* Degree */}
          <div className="mt-3 pt-1">
            <h3 className="text-[#3F4F6D] font-bold text-[14px] uppercase tracking-wide text-center">
              {data.student.degree}
            </h3>

            {/* Campus */}
            <div className="flex items-center justify-center gap-1 text-[#0a0c10] text-[13px] font-medium mt-1">
              <span className="text-[12px]">📍</span>
              <span>{data.student.campus}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
