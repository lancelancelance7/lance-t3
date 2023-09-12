import { UserButton } from "@clerk/nextjs";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

const paths = [
  {
    label: "Home",
    href: "/",
  },
];

export const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="flex h-16 items-center gap-8 bg-orange-500 px-6 text-xl font-bold text-white shadow">
      <div className="flex h-full flex-1 gap-6">
        {paths.map((path) => (
          <Link
            key={path.label}
            href={path.href}
            className={clsx(
              "flex items-center px-2 pb-2",
              pathname === path.href && "bg-orange-400",
            )}
          >
            {path.label}
          </Link>
        ))}
      </div>
      <div className="rounded-full shadow">
        <UserButton />
      </div>
    </div>
  );
};
