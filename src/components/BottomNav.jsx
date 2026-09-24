import React from 'react';
import { Home, GraduationCap, MessageSquare, User } from 'lucide-react';

export const BottomNav = ({ activeTab, onSelectTab }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'academico', label: 'Académico', icon: GraduationCap },
    { id: 'ayuda', label: 'Ayuda', icon: MessageSquare },
    { id: 'perfil', label: 'Perfil', icon: User },
  ];

  return (
    <div className="w-full bg-white border-t border-slate-200/80 shrink-0 z-30 shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
      <div className="grid grid-cols-4 relative h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className="relative flex flex-col items-center justify-center h-full transition-all group focus:outline-none"
            >
              {/* Active top red indicator line */}
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#E4002B] rounded-b-md" />
              )}

              <div className={`transition-transform duration-200 ${isActive ? 'scale-105 text-[#E4002B]' : 'text-slate-500 group-hover:text-slate-700'}`}>
                {tab.id === 'perfil' && isActive ? (
                  <img
                    src="/images/icono_perfil.png"
                    alt="Perfil"
                    className="w-[22px] h-[22px] object-contain"
                  />
                ) : (
                  <Icon size={21} strokeWidth={isActive ? 2.3 : 1.9} />
                )}
              </div>

              <span
                className={`text-[11px] mt-1 font-medium transition-colors ${
                  isActive ? 'text-[#E4002B] font-semibold' : 'text-slate-600'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
