import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`flex items-center gap-1 relative group font-semibold transition-colors
        ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}
      `}
    >
      {children}

      <span
        className={`absolute left-0 -bottom-1 bg-blue-600 transition-all duration-300
          ${isActive ? "w-full h-0" : "w-0 h-0.5 group-hover:w-full"}
        `}
      />
    </Link>
  );
};

export default NavLink;
