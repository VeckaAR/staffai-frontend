import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatPanel() {
  return (
    <section className="flex flex-col flex-1 bg-slate-50">
      
      {/* 🔹 AQUÍ SE VE EL HEADER */}
      <ChatHeader />

      {/* 🔹 AQUÍ SE VEN LOS MENSAJES */}
      <div className="flex-1 overflow-y-auto">
        <MessageList />
      </div>

      {/* 🔹 AQUÍ SE VE EL INPUT */}
      <MessageInput />
    </section>
  );
}




