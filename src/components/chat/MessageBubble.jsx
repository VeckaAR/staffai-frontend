import { useState } from "react";
import { Check, CheckCheck, Star, MoreVertical } from "lucide-react";

export default function MessageBubble({
  message,
  time,
  sender,
  isOwn = false,
  status = "sent", // sent | delivered | read
  tag: initialTag,
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

  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`relative max-w-[70%] rounded-2xl px-4 py-3 text-sm
        ${
          isOwn
            ? "bg-blue-500 text-white"
            : "bg-slate-200 text-slate-800"
        }`}
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

        {/* Dropdown */}
        {menuOpen && isOwn && (
          <div className="absolute right-2 top-8 z-10 bg-white text-slate-800 text-xs rounded-lg shadow-lg w-40">
            <button
              className="w-full px-3 py-2 hover:bg-slate-100 flex items-center gap-2"
              onClick={() => {
                setImportant(!important);
                setMenuOpen(false);
              }}
            >
              <Star className="w-4 h-4 text-yellow-400" />
              {important ? "Quitar importante" : "Marcar importante"}
            </button>

            <div className="border-t my-1" />

            {["Urgente", "Normal", "VIP"].map((label) => (
              <button
                key={label}
                className="w-full px-3 py-2 hover:bg-slate-100 text-left"
                onClick={() => {
                  setTag(label);
                  setMenuOpen(false);
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Mensaje */}
        <p>{message}</p>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 mt-2 text-[11px] opacity-80">
          <span>{time}</span>

          {tag && (
            <span className="px-2 py-0.5 rounded-full bg-white/20">
              {tag}
            </span>
          )}

          {important && (
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
          )}

          {isOwn && renderStatusIcon()}
        </div>
      </div>
    </div>
  );
}



  