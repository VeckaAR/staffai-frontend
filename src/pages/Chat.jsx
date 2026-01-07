import SidebarMenu from "../components/chat/SidebarMenu";
import ContactsPanel from "../components/chat/ContactsPanel";
import ChatPanel from "../components/chat/ChatPanel";

export default function Chat() {
  return (
    <div className="h-screen flex bg-slate-100">
      <SidebarMenu />
      <ContactsPanel />
      <ChatPanel />
    </div>
  );
}

