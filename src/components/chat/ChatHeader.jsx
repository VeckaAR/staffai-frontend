export default function ChatHeader() {
  return (
    <div className="h-16 bg-white border-b px-4 flex items-center justify-between">
      <div>
        <p className="font-semibold text-slate-800">Vero</p>

        <div className="flex gap-2 mt-1">
          <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700">
            WhatsApp
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">
            Cliente
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-slate-200 text-slate-700">
            Editable
          </span>
        </div>
      </div>

      <button className="text-slate-500">⋮</button>
    </div>
  );
}

  