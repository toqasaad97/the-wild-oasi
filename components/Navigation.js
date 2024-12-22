import Link from 'next/link';
import { auth } from '../lib/auth';

const links = [
  { href: "/cabins", label: "Cabins" },
  { href: "/about", label: "About" },
  { href: "/account", label: "Guest area" },
];

export default async function Navigation() {
  const session =await auth()
  return (
    <nav className="z-10 text-xl mt-3">
      <ul className="flex gap-16 items-center">
        {links.map(({ href, label }) => (
          <li key={`${href}`}>
            {href === "/account" && session?.user?.email ? (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors flex items-center gap-4"
              >
                <img
                  className="h-8 rounded-full"
                  src={session.user.image ?? ""}
                  alt={session.user.name ?? ""}
                  referrerPolicy="no-referrer"
                />
                <span>{session.user.name}</span>
              </Link>
            ) : (
              <Link
                href={href}
                className="hover:text-accent-400 hover:underline transition-colors"
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}