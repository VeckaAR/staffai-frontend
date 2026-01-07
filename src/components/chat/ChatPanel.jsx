import ChatHeader from "./ChatHeader";
import MessagesList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatPanel() {
  return (
    <section className="flex-1 flex flex-col bg-slate-50">
      <ChatHeader />
      <MessagesList />
      <MessageInput />
    </section>
  );
}


