export default function Button({ children }) {
  return (
    <button
      type="submit"
      className="
        w-full rounded-xl
        bg-gradient-to-r from-staff-cyan to-staff-blue
        py-3 text-lg font-semibold text-white
        shadow-lg hover:scale-[1.02]
        transition
      "
    >
      {children}
    </button>
  );
}



  