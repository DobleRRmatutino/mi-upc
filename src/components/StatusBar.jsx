import React, { useState, useEffect } from 'react';
import { Wifi } from 'lucide-react';

export const StatusBar = ({ customTime, isLight = false }) => {
  const [timeStr, setTimeStr] = useState(customTime || "9:21");

  useEffect(() => {
    if (customTime) {
      setTimeStr(customTime);
      return;
    }
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      // format 9:21
      setTimeStr(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, [customTime]);

  const textColor = isLight ? "text-slate-800" : "text-slate-900";

  return (
    <div className={`w-full flex items-center justify-between px-6 pt-3 pb-2 select-none z-30 font-semibold text-xs ${textColor}`}>
      {/* Dynamic Notch / Left Time */}
      <div className="font-semibold text-sm tracking-tight pl-1">
        {timeStr}
      </div>

      {/* Right Icons: Cellular, Wifi, Battery */}
      <div className="flex items-center gap-1.5 pr-1">
        {/* Cellular bars */}
        <div className="flex items-end gap-[1.5px] h-3">
          <div className="w-[3px] h-1.5 bg-current rounded-xs" />
          <div className="w-[3px] h-2 bg-current rounded-xs" />
          <div className="w-[3px] h-2.5 bg-current rounded-xs" />
          <div className="w-[3px] h-3 bg-current rounded-xs" />
        </div>

        {/* Wifi */}
        <Wifi size={14} className="stroke-[2.5]" />

        {/* Battery with percentage inside or beside */}
        <div className="flex items-center gap-1">
          <div className="relative flex items-center justify-center bg-yellow-400 text-black font-bold text-[9px] px-1 rounded-sm h-[13px] min-w-[22px]">
            55
            <div className="absolute -right-[3px] top-[3.5px] w-[2px] h-[5px] bg-slate-400 rounded-r-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};
