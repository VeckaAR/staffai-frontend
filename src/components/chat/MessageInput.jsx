export default function MessageInput() {
  return (
    <div className="h-16 bg-white border-t flex items-center px-4 gap-3">
      <input
        type="text"
        placeholder="Escribe un mensaje"
        className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Enviar
      </button>
    </div>
  );
}
