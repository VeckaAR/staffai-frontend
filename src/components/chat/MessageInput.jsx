export default function MessageInput() {
    return (
      <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex gap-2">
        <button>😊</button>
  
        <input
          type="text"
          placeholder="Escribe un mensaje"
          className="flex-1 px-4 py-2 rounded-full border border-slate-300 focus:outline-none"
        />
  
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
          Enviar
        </button>
      </div>
    );
  }
  