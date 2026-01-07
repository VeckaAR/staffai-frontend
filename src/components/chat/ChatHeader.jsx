import { MessageCircle, Instagram, Facebook } from "lucide-react";

/* 🔹 ICONOS DE RED SOCIAL (DEBEN IR ARRIBA) */
const socialIcons = {
  whatsapp: <MessageCircle className="w-4 h-4 text-green-500" />,
  instagram: <Instagram className="w-4 h-4 text-pink-500" />,
  facebook: <Facebook className="w-4 h-4 text-blue-600" />,
};

export default function ChatHeader() {
  // datos mock (luego vienen de backend)
  const social = "whatsapp"; // whatsapp | instagram | facebook
  const clientType = "VIP";
  const priority = "Urgente";

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white">
      
      {/* IZQUIERDA */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center font-bold text-slate-700">
          M
        </div>

        {/* Nombre + etiquetas */}
        <div>
          <p className="font-semibold text-slate-800">
            Michael Alavedra
          </p>

          <div className="flex items-center gap-2 mt-1">
            {/* Red social (logo) */}
            <span className="p-1 rounded bg-slate-100">
              {socialIcons[social]}
            </span>

            {/* Clasificación fija */}
            <span className="px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-700">
              {clientType}
            </span>

            {/* Clasificación editable */}
            <select className="text-xs bg-orange-100 text-orange-700 rounded px-2 py-0.5 outline-none">
              <option>Urgente</option>
              <option>Normal</option>
              <option>Seguimiento</option>
            </select>
          </div>
        </div>
      </div>

      {/* DERECHA */}
      <button className="text-slate-400 hover:text-slate-600">
        ⋮
      </button>
    </header>
  );
}






  