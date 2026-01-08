import MessageBubble from "./MessageBubble";

export default function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      <MessageBubble
  message="¿Cómo estás?"
  time="10:31"
  sender="Vero"
  isOwn
  status="read"
  tag="Urgente"
  important
/>

<MessageBubble
  message="Hola 👋"
  time="10:30"
  tag="VIP"
/>


    </div>
  );
}



