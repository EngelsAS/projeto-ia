import { ReactNode } from "react";

const Titulo = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-xl font-bold mb-3">{children}</h1>;
};

export default Titulo;
