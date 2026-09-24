import React, { useState, useRef } from 'react';
import { X, Upload, Check, RotateCcw, Camera, ShieldCheck } from 'lucide-react';
import { CARRERAS } from '../data/carreras';

// Auto-obfuscate helper
export const obfuscateLastName = (lastName) => {
  if (!lastName) return '';
  const parts = lastName.trim().split(/\s+/);
  return parts
    .map((name) => {
      if (name.includes('*')) return name; // Already obfuscated
      if (name.length <= 1) return name;
      return name[0].toUpperCase() + '***';
    })
    .join(' ');
};

export const SecretEditorModal = ({ isOpen, onClose, currentData, onSave, onReset }) => {
  const fileInputRef = useRef(null);

  // Form state
  const [firstName, setFirstName] = useState(() => {
    // Try to extract first name
    const parts = currentData.student.fullName.split(' R***')[0] || currentData.student.shortGreeting;
    return parts;
  });
  const [lastName, setLastName] = useState("ROJAS RODRIGUEZ");
  const [autoObfuscate, setAutoObfuscate] = useState(true);
  const [manualFullName, setManualFullName] = useState(currentData.student.fullName);
  const [useManualName, setUseManualName] = useState(false);

  const [shortGreeting, setShortGreeting] = useState(currentData.student.shortGreeting);
  const [studentCode, setStudentCode] = useState(currentData.student.studentCode);
  const [idBanner, setIdBanner] = useState(currentData.student.idBanner);
  const [email, setEmail] = useState(currentData.student.email);
  const [degree, setDegree] = useState(currentData.student.degree);
  const [campus, setCampus] = useState(currentData.student.campus);
  const [avatarUrl, setAvatarUrl] = useState(currentData.student.avatarUrl);

  if (!isOpen) return null;

  // Compute full name
  const computedFullName = useManualName
    ? manualFullName
    : `${firstName.trim().toUpperCase()} ${autoObfuscate ? obfuscateLastName(lastName) : lastName.trim().toUpperCase()}`;

  // Handle Photo Upload from Gallery or Camera
  const handlePhotoSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size (< 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("La imagen seleccionada supera los 5MB. Por favor elige una imagen más ligera.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target?.result;
      if (typeof base64String === 'string') {
        setAvatarUrl(base64String);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleCodeChange = (code) => {
    const cleanCode = code.toUpperCase().replace(/\s+/g, '');
    setStudentCode(cleanCode);
    // Auto-update email if standard pattern
    if (!email || email.includes('@upc.edu.pe')) {
      const prefix = cleanCode.toLowerCase().startsWith('u') ? cleanCode.toLowerCase() : `u${cleanCode.toLowerCase()}`;
      setEmail(`${prefix}@upc.edu.pe`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedStudentCode = studentCode.toUpperCase().startsWith('U') 
      ? studentCode.toUpperCase().slice(1) 
      : studentCode.toUpperCase();
    const formattedTiuCode = `U${formattedStudentCode}`;

    const updatedData = {
      ...currentData,
      student: {
        ...currentData.student,
        fullName: computedFullName,
        shortGreeting: shortGreeting.trim(),
        studentCode: formattedStudentCode,
        tiuStudentCode: formattedTiuCode,
        idBanner: idBanner.toUpperCase().trim(),
        email: email.trim(),
        degree: degree.toUpperCase().trim(),
        campus: campus.trim(),
        avatarUrl: avatarUrl,
      }
    };

    onSave(updatedData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-sm w-full shadow-2xl overflow-hidden border border-slate-200 my-6 flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-[#FAFCFF] shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-red-100 text-[#E4002B] flex items-center justify-center font-bold text-xs">
              UPC
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm leading-tight">Configurar Datos Ficticios</h3>
              <p className="text-[10px] text-slate-500">Panel secreto activo</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 rounded-full p-1 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-4 text-xs flex-1">
          {/* Photo Picker */}
          <div className="flex flex-col items-center justify-center pb-2 border-b border-slate-100">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-red-100 shadow-md bg-slate-100">
                <img
                  src={avatarUrl}
                  alt="Foto"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80";
                  }}
                />
              </div>

              {/* Upload Overlay Button */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 bg-black/40 text-white rounded-full flex flex-col items-center justify-center opacity-90 hover:opacity-100 transition"
                title="Cambiar foto"
              >
                <Camera size={22} />
                <span className="text-[9px] font-bold mt-1">Cambiar</span>
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoSelect}
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-2.5 text-[#E4002B] font-bold text-xs flex items-center gap-1 hover:underline"
            >
              <Upload size={13} />
              <span>Subir foto desde galería</span>
            </button>
          </div>

          {/* Name Configuration */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="font-semibold text-slate-700">Nombres del Alumno</label>
              <button
                type="button"
                onClick={() => setUseManualName(!useManualName)}
                className="text-[10px] text-blue-600 hover:underline"
              >
                {useManualName ? "Usar generador" : "Editar manual"}
              </button>
            </div>

            {useManualName ? (
              <input
                type="text"
                value={manualFullName}
                onChange={(e) => setManualFullName(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 font-medium"
                placeholder="DIEGO NICOLAS R*** R***"
                required
              />
            ) : (
              <div className="space-y-2">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (!shortGreeting || shortGreeting === firstName) {
                      setShortGreeting(e.target.value);
                    }
                  }}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 font-medium"
                  placeholder="Ej: DIEGO NICOLAS"
                  required
                />

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Apellidos (Reales o Ficticios)</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 font-medium"
                    placeholder="Ej: ROJAS RODRIGUEZ"
                    required
                  />
                </div>

                <div className="flex items-center gap-2 pt-0.5">
                  <input
                    type="checkbox"
                    id="autoObfuscate"
                    checked={autoObfuscate}
                    onChange={(e) => setAutoObfuscate(e.target.checked)}
                    className="rounded text-[#E4002B] focus:ring-red-400 h-3.5 w-3.5"
                  />
                  <label htmlFor="autoObfuscate" className="text-slate-600 text-[11px] cursor-pointer">
                    Ofuscar con asteriscos oficiales (<span className="font-bold text-[#E4002B]">R*** R***</span>)
                  </label>
                </div>
              </div>
            )}

            {/* Live Name Preview */}
            <div className="mt-2 p-2 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] text-slate-400 block">Vista previa en carnet y perfil:</span>
              <span className="font-bold text-[#FB393C] text-sm tracking-wide">
                {computedFullName}
              </span>
            </div>
          </div>

          {/* Greeting on Home */}
          <div>
            <label className="font-semibold text-slate-700 block mb-1">Nombre en saludo Home</label>
            <input
              type="text"
              value={shortGreeting}
              onChange={(e) => setShortGreeting(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 font-medium"
              placeholder="Diego Nicolas"
              required
            />
          </div>

          {/* Student Codes */}
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Código de Alumno</label>
              <input
                type="text"
                value={studentCode}
                onChange={(e) => handleCodeChange(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 font-medium"
                placeholder="20221B076"
                required
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">ID Banner</label>
              <input
                type="text"
                value={idBanner}
                onChange={(e) => setIdBanner(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 font-medium"
                placeholder="N04312490"
                required
              />
            </div>
          </div>

          {/* Institutional Email */}
          <div>
            <label className="font-semibold text-slate-700 block mb-1">Correo Institucional</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 font-medium"
              placeholder="u20221b076@upc.edu.pe"
              required
            />
          </div>

          {/* Career Selection (from official list) */}
          <div>
            <label className="font-semibold text-slate-700 block mb-1">Carrera / Especialidad</label>
            <select
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 font-medium bg-white"
            >
              {CARRERAS.map((c) => (
                <option key={c.value} value={c.label.toUpperCase()}>
                  {c.label}
                </option>
              ))}
              <option value="ING. SISTEMAS DE INFORMACIÓN">ING. SISTEMAS DE INFORMACIÓN</option>
              <option value="ING. DE SOFTWARE">ING. DE SOFTWARE</option>
            </select>
          </div>

          {/* Campus Selection */}
          <div>
            <label className="font-semibold text-slate-700 block mb-1">Campus</label>
            <select
              value={campus}
              onChange={(e) => setCampus(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 font-medium bg-white"
            >
              <option value="Campus San Isidro">Campus San Isidro</option>
              <option value="Campus Monterrico">Campus Monterrico</option>
              <option value="Campus San Miguel">Campus San Miguel</option>
              <option value="Campus Villa">Campus Villa</option>
            </select>
          </div>

          {/* Actions */}
          <div className="pt-2 flex gap-2">
            <button
              type="button"
              onClick={() => {
                if (window.confirm("¿Restablecer los datos originales de la captura?")) {
                  onReset();
                  onClose();
                }
              }}
              className="px-3 py-2.5 border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 flex items-center justify-center gap-1 transition"
              title="Restablecer valores originales"
            >
              <RotateCcw size={14} />
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-[#E4002B] hover:bg-red-700 text-white rounded-xl font-bold text-xs shadow-md transition"
            >
              Guardar en este Teléfono
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
