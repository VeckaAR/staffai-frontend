import { useState } from "react";
import { Check, CheckCheck, Star, MoreVertical } from "lucide-react";

export default function MessageBubble({
  message,
  time,
  sender,
  isOwn = false,
  status = "sent", // sent | delivered | read
  tag: initialTag = null, // "urgent" | "important" | null
  important: initialImportant = false,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [important, setImportant] = useState(initialImportant);
  const [tag, setTag] = useState(initialTag);

  const renderStatusIcon = () => {
    if (status === "sent") {
      return <Check className="w-4 h-4 text-slate-300" />;
    }
    if (status === "delivered") {
      return <CheckCheck className="w-4 h-4 text-slate-300" />;
    }
    if (status === "read") {
      return (
        <CheckCheck className="w-4 h-4 text-sky-300 drop-shadow-sm" />
      );
    }
    return null;
  };

  const renderTag = () => {
    if (!tag) return null;

    if (tag === "urgent") {
      return (
        <span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 text-[10px] font-medium">
          Urgente
        </span>
      );
    }

    if (tag === "important") {
      return (
        <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 text-[10px] font-medium">
          Importante
        </span>
      );
    }

    return null;
  };

  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`relative max-w-[70%] rounded-2xl px-4 py-3 text-sm
        ${isOwn ? "bg-blue-500 text-white" : "bg-slate-200 text-slate-800"}`}
      >
        {/* Header (solo enviados) */}
        {isOwn && (
          <div className="flex items-center justify-between mb-1 text-xs opacity-80">
            <span>{sender}</span>

            <button onClick={() => setMenuOpen(!menuOpen)}>
              <MoreVertical className="w-4 h-4 cursor-pointer" />
            </button>
          </div>
        )}

        {/* Dropdown menú */}
        {menuOpen && isOwn && (
          <div className="absolute right-2 top-8 z-10 bg-white text-slate-800 text-xs rounded-lg shadow-lg w-44">
            {/* Destacar */}
            <button
              className="w-full px-3 py-2 hover:bg-slate-100 flex items-center gap-2"
              onClick={() => {
                setImportant(!important);
                setMenuOpen(false);
              }}
            >
              <Star className="w-4 h-4 text-yellow-400" />
              {important ? "No destacar" : "Destacar"}
            </button>

            <div className="border-t my-1" />

            {/* Urgente */}
            <button
              className="w-full px-3 py-2 hover:bg-slate-100 text-left"
              onClick={() => {
                setTag(tag === "urgent" ? null : "urgent");
                setMenuOpen(false);
              }}
            >
              {tag === "urgent" ? "Quitar urgente" : "Marcar urgente"}
            </button>

            {/* Importante como etiqueta */}
            <button
              className="w-full px-3 py-2 hover:bg-slate-100 text-left"
              onClick={() => {
                setTag(tag === "important" ? null : "important");
                setMenuOpen(false);
              }}
            >
              {tag === "important"
                ? "Quitar etiqueta importante"
                : "Etiqueta importante"}
            </button>
          </div>
        )}

        {/* Mensaje */}
        <p>{message}</p>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 mt-2 text-[11px] opacity-80">
          <span>{time}</span>

          {/* Etiqueta */}
          {renderTag()}

          {/* Estrella */}
          {important && (
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
          )}

          {/* Checks */}
          {isOwn && renderStatusIcon()}
        </div>
      </div>
    </div>
  );
}




  