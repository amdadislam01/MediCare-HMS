import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        group relative flex items-center
        w-full px-5 py-3
        font-medium
        transition-all duration-200
        rounded-md
        ${
          isActive
            ? "text-blue-600 bg-blue-50"
            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
        }
      `}
    >
      <span
        className={`
          absolute left-0 top-1/2 -translate-y-1/2
          h-6 w-1 rounded-r
          bg-blue-600
          transition-opacity
          ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
      />

      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default SideNavLink;
