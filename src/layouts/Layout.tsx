import { type FC, type PropsWithChildren } from "react";
import { Header } from "~/components/Header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" flex min-h-screen min-w-[1024px] flex-col">
      <Header />
      <div className="flex flex-1 flex-col items-center">{children}</div>
    </div>
  );
};
