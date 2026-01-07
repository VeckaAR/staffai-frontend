import {
  MessageCircle,
  Users,
  Settings
} from "lucide-react";

export default function SidebarMenu() {
  return (
    <aside className="w-16 bg-slate-900 text-white flex flex-col items-center py-4 gap-6">
      
      {/* Avatar / Logo arriba */}
      <img
        src="/logo-dark.png"
        alt="StaffAI"
        className="w-8 h-8 rounded-full object-contain"
      />

      {/* Menu */}
      <nav className="flex flex-col gap-6 mt-6">
        <button className="text-blue-400">
          <MessageCircle size={22} />
        </button>

        <button className="text-slate-400 hover:text-white">
          <Users size={22} />
        </button>

        <button className="text-slate-400 hover:text-white">
          <Settings size={22} />
        </button>
      </nav>
    </aside>
  );
}



