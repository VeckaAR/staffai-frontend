export default function ContactsPanel() {
  return (
    <aside className="w-72 bg-white border-r p-4">
      <h2 className="text-sm font-semibold text-slate-600 mb-4">
        Contactos
      </h2>

      <ul className="space-y-2">
        <li className="p-3 rounded-lg bg-slate-100 cursor-pointer">
          Michael Alavedra
        </li>
        <li className="p-3 rounded-lg hover:bg-slate-100 cursor-pointer">
          Tobillo
        </li>
      </ul>
    </aside>
  );
}


  