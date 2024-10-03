import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <section className="w-full max-w-4xl m-auto">{children}</section>;
};

export default Container;
