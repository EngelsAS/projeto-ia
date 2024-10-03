import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section className="py-3 flex flex-col items-center border-b-2 border-zinc-400">
      {children}
    </section>
  );
};

export default Section;
