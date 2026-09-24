import React, { useState } from 'react';
import { BlackboardIcon, ExploraIcon, TiendaCartIcon } from '../components/Icons3D';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useTripleTap } from '../hooks/useTripleTap';

export const HomeScreen = ({ data, onNavigateToTab, onSecretTrigger }) => {
  const [selectedDay, setSelectedDay] = useState('today'); // 'today' | 'tomorrow'
  const [courseExpanded, setCourseExpanded] = useState(false);

  // Triple tap on MI UPC logo triggers hidden editor
  const handleLogoTripleTap = useTripleTap(onSecretTrigger);

  const activeSchedule = selectedDay === 'today' ? data.scheduleToday : data.scheduleTomorrow;
  const currentCourse = data.courses[0];

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar bg-[#F5F7FB] flex flex-col pb-4">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 pt-3 pb-2">
        {/* MI UPC Logo (3 quick taps opens secret editor) */}
        <div 
          onClick={handleLogoTripleTap}
          className="cursor-pointer active:scale-95 transition-transform select-none"
          title="MI UPC"
        >
          <img 
            src="/images/logo_mi_upc.png" 
            alt="MI UPC" 
            className="h-8 object-contain" 
          />
        </div>

        {/* Bell Button (Official Asset) */}
        <button 
          className="relative w-10 h-10 flex items-center justify-center active:scale-95 transition-transform"
        >
          <img 
            src="/images/boton_campana.png" 
            alt="Notificaciones" 
            className="w-full h-full object-contain" 
          />
        </button>
      </div>

      {/* Greeting Banner */}
      <div className="px-6 pt-1 pb-3 flex items-center justify-between">
        <div>
          <h2 className="text-[#E4002B] text-[26px] font-bold tracking-tight leading-tight">
            Hola,
          </h2>
          <h1 className="text-[#E4002B] text-[26px] font-extrabold tracking-tight leading-tight">
            {data.student.shortGreeting}
          </h1>
          <p className="text-slate-600 text-sm font-normal mt-0.5">
            ¡Te damos la bienvenida!
          </p>
        </div>

        {/* Animated Characters Video from UPC App */}
        <div className="relative w-36 h-24 overflow-hidden flex items-end justify-end select-none pointer-events-none">
          <video
            src="/videos/greeting_characters.mp4"
            poster="/images/greeting_characters.png"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain object-right"
          />
        </div>
      </div>

      <div className="px-5 space-y-4">
        {/* ================= SECTION: HORARIOS ================= */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          {/* Section Header with Official Clock Icon */}
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-center gap-2">
              <img 
                src="/images/icono_reloj_clean.png" 
                alt="Reloj" 
                className="w-6 h-6 object-contain"
              />
              <h3 
                className="font-solano font-bold text-2xl text-black tracking-wide pt-0.5"
                style={{ WebkitTextStroke: '0.2px #000' }}
              >
                HORARIOS
              </h3>
            </div>
            <button 
              onClick={() => onNavigateToTab('academico')}
              className="text-[#3538CD] hover:text-blue-700 font-bold text-sm flex items-center gap-0.5 transition"
            >
              Ver todos
              <ChevronRight size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Day Pills */}
          <div className="grid grid-cols-2 gap-2.5 mb-3.5">
            <button
              onClick={() => setSelectedDay('today')}
              className={`py-2 px-3 rounded-full text-xs font-bold transition text-center ${
                selectedDay === 'today'
                  ? 'bg-[#E4002B] text-white shadow-xs'
                  : 'bg-white border border-[#E4002B] text-[#E4002B]'
              }`}
            >
              {data.scheduleToday.dayLabel}
            </button>

            <button
              onClick={() => setSelectedDay('tomorrow')}
              className={`py-2 px-3 rounded-full text-xs font-bold transition text-center ${
                selectedDay === 'tomorrow'
                  ? 'bg-[#E4002B] text-white shadow-xs'
                  : 'bg-white border border-[#E4002B] text-[#E4002B]'
              }`}
            >
              {data.scheduleTomorrow.dayLabel}
            </button>
          </div>

          {/* Schedule Detail Box */}
          <div className="flex items-center bg-[#F9FBFF] border border-slate-100 rounded-xl p-3">
            {/* Time column */}
            <div className="flex flex-col items-center justify-center shrink-0 pr-3 border-r border-slate-200">
              <span className="font-extrabold text-[15px] text-[#4338CA] tracking-tight">
                {activeSchedule.startTime}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {activeSchedule.endTime}
              </span>
            </div>

            {/* Course & classroom info */}
            <div className="pl-3.5 flex-1 min-w-0">
              <h4 className="font-bold text-slate-800 text-[13px] leading-snug truncate">
                {activeSchedule.course}
              </h4>
              <div className="flex items-center gap-4 mt-1 text-slate-500 text-xs">
                <span>NRC: {activeSchedule.nrc}</span>
                <span>{activeSchedule.classroom}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION: CURSOS ================= */}
        <div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            {/* Section Header with Official 3D Books Icon */}
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <img 
                  src="/images/icono_libros.png" 
                  alt="Libros" 
                  className="w-6 h-6 object-contain"
                />
                <h3 
                  className="font-solano font-bold text-2xl text-black tracking-wide pt-0.5"
                  style={{ WebkitTextStroke: '0.2px #000' }}
                >
                  CURSOS
                </h3>
              </div>
              <button 
                onClick={() => onNavigateToTab('academico')}
                className="text-[#3538CD] hover:text-blue-700 font-bold text-sm flex items-center gap-0.5 transition"
              >
                Ver todos
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>
            </div>

            {/* Course Card */}
            <div>
              <h4 className="font-bold text-slate-800 text-[14px] leading-tight">
                {currentCourse.name}
              </h4>

              {/* Modality Tag */}
              <div className="mt-2">
                <span className="inline-block bg-[#E0F2FE] text-[#0284C7] font-extrabold text-[10px] tracking-wider px-2.5 py-1 rounded-md">
                  {currentCourse.modality}
                </span>
              </div>

              {/* Collapsible Details */}
              {courseExpanded && (
                <div className="mt-3 pt-3 border-t border-slate-100 text-xs space-y-2 text-slate-600 animate-in fade-in duration-200">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Docente:</span>
                    <span className="font-semibold text-slate-700">{currentCourse.professor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Aula / NRC:</span>
                    <span className="font-semibold text-slate-700">{currentCourse.classroom} • NRC {currentCourse.nrc}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Horario:</span>
                    <span className="font-semibold text-slate-700">{currentCourse.schedule}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Asistencia:</span>
                    <span className="font-semibold text-emerald-600">{currentCourse.attendance} (Al día)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Promedio actual:</span>
                    <span className="font-bold text-[#4338CA] text-sm">{currentCourse.average} / 20</span>
                  </div>
                </div>
              )}

              {/* Expand Toggle */}
              <button
                onClick={() => setCourseExpanded(!courseExpanded)}
                className="w-full mt-3 flex items-center justify-center gap-1 text-[#4338CA] font-bold text-xs py-1"
              >
                {courseExpanded ? 'Ver menos detalle' : 'Ver más detalle'}
                {courseExpanded ? (
                  <ChevronUp size={16} strokeWidth={2.5} />
                ) : (
                  <ChevronDown size={16} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-2.5">
            <div className="w-2 h-2 rounded-full bg-[#E4002B]" />
            <div className="w-2 h-2 rounded-full bg-slate-300" />
          </div>
        </div>

        {/* ================= SECTION: MIS SERVICIOS ================= */}
        <div className="pt-1">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-3">
            <h3 
              className="font-solano font-bold text-2xl text-black tracking-wide pt-0.5"
              style={{ WebkitTextStroke: '0.2px #000' }}
            >
              MIS SERVICIOS
            </h3>
            <button 
              onClick={() => onNavigateToTab('ayuda')}
              className="text-[#3538CD] hover:text-blue-700 font-bold text-sm flex items-center gap-0.5 transition"
            >
              Ver todos
              <ChevronRight size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-2.5">
            {/* Aula Virtual */}
            <div 
              className="bg-white rounded-2xl shadow-xs border border-slate-100 flex flex-col items-center justify-center py-4 px-2 text-center"
            >
              <BlackboardIcon size={42} />
              <span className="text-[11px] font-semibold text-slate-800 mt-2.5 leading-tight">
                Aula virtual
              </span>
            </div>

            {/* Explora UPC */}
            <div 
              className="bg-white rounded-2xl shadow-xs border border-slate-100 flex flex-col items-center justify-center py-4 px-2 text-center"
            >
              <ExploraIcon size={42} />
              <span className="text-[11px] font-semibold text-slate-800 mt-2.5 leading-tight">
                Explora UPC
              </span>
            </div>

            {/* TIENDA ONLINE UPC */}
            <div 
              className="bg-white rounded-2xl shadow-xs border border-slate-100 flex flex-col items-center justify-center py-4 px-1 text-center"
            >
              <TiendaCartIcon size={42} />
              <span className="text-[10px] font-bold text-slate-800 mt-2.5 leading-tight uppercase">
                TIENDA ONLINE UPC
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
