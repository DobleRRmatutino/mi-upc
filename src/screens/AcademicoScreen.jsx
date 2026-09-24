import React, { useState } from 'react';
import { UpcFlame } from '../components/Icons3D';
import { BookOpen, Calendar, Award, ChevronRight, CheckCircle, Clock } from 'lucide-react';

export const AcademicoScreen = ({ data }) => {
  const [activeTab, setActiveTab] = useState('cursos');

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-6 bg-[#F5F7FB]">
      {/* Top Header (Safe Area Aware) */}
      <div className="flex items-center justify-between px-6 pt-[calc(env(safe-area-inset-top,0px)+12px)] pb-3 bg-white border-b border-slate-200/80 sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-[20px] tracking-tight text-black">
            ACADÉMICO
          </span>
          <div className="h-4 w-[1px] bg-slate-300" />
          <UpcFlame size={20} />
        </div>
        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
          2026-02
        </span>
      </div>

      <div className="p-5 space-y-4">
        {/* Academic Summary Card */}
        <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white rounded-3xl p-5 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-400 text-xs font-medium">Promedio Ponderado Acumulado</p>
              <h2 className="text-3xl font-extrabold mt-1 text-white tracking-tight">16.85</h2>
            </div>
            <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-xs">
              {data.student.cycle}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-slate-700/80 text-center">
            <div>
              <p className="text-[11px] text-slate-400">Créditos Aprob.</p>
              <p className="font-bold text-sm text-slate-200 mt-0.5">178</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-400">En Curso</p>
              <p className="font-bold text-sm text-slate-200 mt-0.5">21</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-400">Turno</p>
              <p className="font-bold text-sm text-slate-200 mt-0.5">Regular</p>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex items-center justify-between pt-2">
          <h3 className="font-condensed font-bold text-xl text-black tracking-wide">
            MIS ASIGNATURAS INSCRITAS
          </h3>
          <span className="text-xs font-semibold text-slate-500">
            {data.courses.length} Cursos
          </span>
        </div>

        {/* Courses List */}
        <div className="space-y-3">
          {data.courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/70 hover:border-slate-300 transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[11px] font-bold text-[#E4002B] uppercase">
                    {course.code} • NRC {course.nrc}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm mt-0.5">
                    {course.name}
                  </h4>
                </div>
                <span className="text-xs font-bold bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full">
                  {course.credits} Cr.
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 pt-2.5 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Clock size={13} className="text-slate-400" />
                  <span>{course.schedule}</span>
                </div>
                <div className="font-bold text-slate-700">
                  Promedio: <span className="text-[#4338CA]">{course.average}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
