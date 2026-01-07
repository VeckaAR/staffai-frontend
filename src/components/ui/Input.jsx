export default function Input({
  label,
  type = "text",
  register,
  name,
  theme = "light",
}) {
  const isLight = theme === "light";

  return (
    <div className="flex flex-col gap-1">
      <label
        className={`text-sm
          ${isLight ? "text-slate-600" : "text-slate-300"}
        `}
      >
        {label}
      </label>

      <input
        type={type}
        {...register(name)}
        className={`
          w-full rounded-xl px-5 py-3
          focus:outline-none focus:ring-2 focus:ring-staff-cyan
          ${
            isLight
              ? "bg-white border border-slate-300 text-slate-800"
              : "bg-white/10 border border-white/20 text-white"
          }
        `}
      />
    </div>
  );
}




  