import MessageBubble from "./MessageBubble";

export default function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      <MessageBubble text="Hola Michael" isOwn />
      <MessageBubble text="¿Qué opinas?" />
    </div>
  );
}



