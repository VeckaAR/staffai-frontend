export default function MessageBubble({ message }) {
    const isMe = message.sender === "me";
  
    return (
      <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
        <div
          className={`max-w-xs px-4 py-2 rounded-xl text-sm ${
            isMe
              ? "bg-blue-500 text-white"
              : "bg-slate-200 dark:bg-slate-700 dark:text-white"
          }`}
        >
          <p>{message.text}</p>
          <div className="text-xs mt-1 opacity-70 flex justify-end gap-1">
            <span>{message.time}</span>
            {isMe && <span>✔✔</span>}
          </div>
        </div>
      </div>
    );
  }
  