import { LogIn } from "lucide-react";

const LoginButton = () => {
  return (
    <button
      className="
        group relative inline-flex items-center gap-2
        px-4 py-2
        rounded-lg
        border-2 border-blue-600
        text-blue-600 
        font-semibold
        overflow-hidden
        transition-all duration-500
        hover:text-white
        hover:shadow-md
        active:scale-95
        cursor-pointer
      "
    >
      <span
        className="
          absolute inset-0
          bg-blue-600
          scale-x-0
          origin-left
          transition-transform duration-500
          group-hover:scale-x-100
          -z-10
        "
      />
      <LogIn className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 " />
      Login
    </button>
  );
};

export default LoginButton;
