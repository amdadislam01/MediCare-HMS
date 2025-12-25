import Link from "next/link";

const Logo = ({ size = "md", showText = true }) => {
  const sizes = {
    sm: {
      box: "w-8 h-8",
      icon: "text-sm",
      text: "text-lg",
    },
    md: {
      box: "w-10 h-10",
      icon: "text-lg",
      text: "text-xl",
    },
    lg: {
      box: "w-12 h-12",
      icon: "text-xl",
      text: "text-2xl",
    },
  };

  return (
    <Link href="/" className="flex items-center gap-2 select-none">
      {/* Logo Icon */}
      <div
        className={`
          ${sizes[size].box}
          rounded-xl
          bg-primary
          flex items-center justify-center
          text-white font-bold
          shadow-md
          relative
        `}
      >
        <span className="absolute w-2 h-2 bg-white rounded-sm"></span>

        <span className={`${sizes[size].icon} relative z-10`}>M</span>
      </div>

      {showText && (
        <span
          className={`
            ${sizes[size].text}
            font-bold
            tracking-wide
            text-primary
           
          `}
        >
          Medicare 
        </span>
      )}
    </Link>
  );
};

export default Logo;
