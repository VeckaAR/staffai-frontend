import ChatLayout from "../layouts/ChatLayout";
import SidebarMenu from "../components/chat/SidebarMenu";
import ContactsPanel from "../components/chat/ContactsPanel";
import ChatPanel from "../components/chat/ChatPanel";

export default function Chat() {
  return (
    <ChatLayout>
      <SidebarMenu />
      <ContactsPanel />
      <ChatPanel />
    </ChatLayout>
  );
}


