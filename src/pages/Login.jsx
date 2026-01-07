import { useForm } from "react-hook-form";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useTheme } from "../context/ThemeContext";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { theme, toggleTheme } = useTheme();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors relative overflow-hidden
      ${
        theme === "light"
          ? "bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100"
          : "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
      }`}
    >
      {/* GLOWS */}
      {theme === "light" && (
        <>
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl" />
        </>
      )}

      {theme === "dark" && (
        <>
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-slate-700/20 rounded-full blur-3xl" />
        </>
      )}

      {/* CARD */}
      <div
        className={`relative z-10 w-full max-w-md p-8 rounded-2xl transition-all
        ${
          theme === "light"
            ? "bg-white text-slate-800 border border-slate-200 shadow-xl shadow-slate-300/40"
            : "bg-slate-800 text-white border border-slate-700 shadow-2xl shadow-black/40"
        }`}
      >
        {/* Toggle */}
        <button
          onClick={toggleTheme}
          className={`absolute top-4 right-4 text-sm px-3 py-1 rounded-full transition
          ${
            theme === "light"
              ? "bg-slate-200 text-slate-800"
              : "bg-slate-700 text-white"
          }`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {/* Logo */}
        <img
          src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
          alt="StaffAI"
          className="mx-auto mb-6 h-14 md:h-16"
        />

        <h1 className="text-xl font-semibold text-center mb-6">
          Iniciar sesión
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Correo electrónico"
            name="email"
            register={register}
          />

          <Input
            label="Contraseña"
            type="password"
            name="password"
            register={register}
          />

          <Button>Iniciar sesión</Button>
        </form>
      </div>
    </div>
  );
}






