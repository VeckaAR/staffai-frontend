export default function MessageBubble({ text, isOwn }) {
  return (
    <div
      className={`max-w-xs px-4 py-2 rounded-lg text-sm
        ${isOwn
          ? "ml-auto bg-blue-500 text-white"
          : "bg-white border"
        }`}
    >
      <p>{text}</p>

      <div className="text-[10px] text-right opacity-70 mt-1">
        12:30
      </div>
    </div>
  );
}

  