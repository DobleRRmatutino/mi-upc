import React, { useState } from 'react';
import { X, Check, RefreshCw, User, Sparkles } from 'lucide-react';

export const EditDataModal = ({ isOpen, onClose, currentData, onSave }) => {
  const [formData, setFormData] = useState({
    fullName: currentData.student.fullName,
    shortGreeting: currentData.student.shortGreeting,
    degree: currentData.student.degree,
    campus: currentData.student.campus,
    studentCode: currentData.student.studentCode,
    tiuStudentCode: currentData.student.tiuStudentCode || `U${currentData.student.studentCode}`,
    idBanner: currentData.student.idBanner,
    email: currentData.student.email,
    avatarUrl: currentData.student.avatarUrl,
  });

  if (!isOpen) return null;

  const presets = [
    {
      name: "Diego Nicolas (Ficticio)",
      data: {
        fullName: "DIEGO NICOLAS R*** R***",
        shortGreeting: "Diego Nicolas",
        degree: "ING. SISTEMAS DE INFORMACIÓN",
        campus: "Campus San Isidro",
        studentCode: "20221B076",
        tiuStudentCode: "U20221B076",
        idBanner: "N04312490",
        email: "u20221b076@upc.edu.pe",
        avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80",
      }
    },
    {
      name: "Valentina Morales (Ficticio)",
      data: {
        fullName: "VALENTINA SOFÍA M*** D***",
        shortGreeting: "Valentina",
        degree: "ING. DE SOFTWARE",
        campus: "Campus Monterrico",
        studentCode: "20231A452",
        tiuStudentCode: "U20231A452",
        idBanner: "N00984521",
        email: "u20231a452@upc.edu.pe",
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
      }
    },
    {
      name: "Mateo Cárdenas (Ficticio)",
      data: {
        fullName: "MATEO ANDRÉS C*** P***",
        shortGreeting: "Mateo",
        degree: "ADMINISTRACIÓN Y MARKETING",
        campus: "Campus San Miguel",
        studentCode: "20212C118",
        tiuStudentCode: "U20212C118",
        idBanner: "N00762391",
        email: "u20212c118@upc.edu.pe",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      }
    }
  ];

  const handleApplyPreset = (preset) => {
    setFormData(preset.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...currentData,
      student: {
        ...currentData.student,
        ...formData,
      }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200 my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-100 text-[#E4002B] flex items-center justify-center">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Personalizar Datos Ficticios</h3>
              <p className="text-[11px] text-slate-500">Ajusta los campos visibles en la interfaz</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 rounded-full p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Presets Bar */}
        <div className="px-6 pt-3 pb-1">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Perfiles Ficticios Rápidos:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {presets.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleApplyPreset(preset)}
                className="text-xs font-medium px-3 py-1 rounded-full border border-slate-200 bg-white hover:border-[#E4002B] hover:text-[#E4002B] transition"
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-3.5 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Nombre Completo (con asteriscos opcionales)</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4002B]/30 font-medium"
              placeholder="DIEGO NICOLAS R*** R***"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Saludo Home</label>
              <input
                type="text"
                value={formData.shortGreeting}
                onChange={(e) => setFormData({ ...formData, shortGreeting: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4002B]/30 font-medium"
                placeholder="Diego Nicolas"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Campus</label>
              <input
                type="text"
                value={formData.campus}
                onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4002B]/30 font-medium"
                placeholder="Campus San Isidro"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Carrera / Programa</label>
            <input
              type="text"
              value={formData.degree}
              onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4002B]/30 font-medium"
              placeholder="ING. SISTEMAS DE INFORMACIÓN"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Código de Alumno</label>
              <input
                type="text"
                value={formData.studentCode}
                onChange={(e) => {
                  const val = e.target.value;
                  setFormData({ 
                    ...formData, 
                    studentCode: val,
                    tiuStudentCode: val.startsWith('U') ? val : `U${val}`
                  });
                }}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4002B]/30 font-medium"
                placeholder="20221B076"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">ID Banner</label>
              <input
                type="text"
                value={formData.idBanner}
                onChange={(e) => setFormData({ ...formData, idBanner: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4002B]/30 font-medium"
                placeholder="N04312490"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Correo Institucional</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4002B]/30 font-medium"
              placeholder="u20221b076@upc.edu.pe"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">URL de Foto de Perfil</label>
            <input
              type="url"
              value={formData.avatarUrl}
              onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4002B]/30 font-mono text-[11px]"
              placeholder="https://..."
            />
          </div>

          {/* Action buttons */}
          <div className="pt-3 flex gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 border border-slate-200 rounded-full font-bold text-slate-600 hover:bg-slate-50 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-[#E4002B] hover:bg-red-700 text-white rounded-full font-bold shadow-md transition"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
