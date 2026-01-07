export default function ContactsPanel() {
  return (
    <aside className="w-72 bg-white border-r flex flex-col">
      <div className="p-4 border-b">
        <input
          placeholder="Buscar contacto"
          className="w-full px-3 py-2 rounded-lg bg-slate-100 text-sm outline-none"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="px-4 py-3 hover:bg-slate-100 cursor-pointer"
          >
            <p className="font-medium text-slate-800">Contacto {item}</p>
            <p className="text-xs text-slate-500">Último mensaje</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

  