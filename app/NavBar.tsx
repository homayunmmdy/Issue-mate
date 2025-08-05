"use client";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import {useSession} from 'next-auth/react'
import { Box } from "@radix-ui/themes";
const NavBar = () => {
  const currentPath = usePathname();
  const {status, data: session} = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <nav className="mb-5 flex h-14 items-center space-x-6 border-b px-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classnames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "transition-colors hover:text-zinc-800": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === 'authenticated' && <Link href="/api/auth/signout">Log out</Link>}
        {status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
      </Box>
    </nav>
  );
};

export default NavBar;
