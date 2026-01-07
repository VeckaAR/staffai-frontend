export default function MessagesList() {
  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-3">
      <div className="max-w-xs bg-white p-3 rounded-lg shadow text-sm">
        Hola 👋
        <div className="text-xs text-right text-slate-400 mt-1">
          10:30
        </div>
      </div>

      <div className="max-w-xs ml-auto bg-blue-500 text-white p-3 rounded-lg text-sm">
        Hola, ¿qué tal?
        <div className="text-xs text-right opacity-70 mt-1">
          10:31 ✔✔
        </div>
      </div>
    </div>
  );
}


