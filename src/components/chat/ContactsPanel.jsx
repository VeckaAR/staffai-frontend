export default function ContactsPanel() {
  // mock temporal (luego viene del backend)
  const contacts = [
    {
      id: 1,
      name: "Michael Alavedra",
      lastMessage: "¿Cómo estás?",
      time: "10:31",
      unread: true,
    },
    {
      id: 2,
      name: "Tobillo",
      lastMessage: "Hola 👋",
      time: "10:30",
      unread: false,
    },
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 p-4">
      <h2 className="text-sm font-semibold text-slate-600 mb-4">
        Contactos
      </h2>

      <ul className="space-y-1">
        {contacts.map((c) => (
          <li
            key={c.id}
            className="p-3 rounded-lg cursor-pointer transition hover:bg-slate-100 bg-slate-50"
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center font-semibold text-slate-700">
                {c.name.charAt(0)}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-slate-800 truncate">
                    {c.name}
                  </p>
                  <span className="text-xs text-slate-400">
                    {c.time}
                  </span>
                </div>

                <div className="flex justify-between items-center mt-0.5">
                  <p className="text-xs text-slate-500 truncate">
                    {c.lastMessage}
                  </p>

                  {c.unread && (
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}



  