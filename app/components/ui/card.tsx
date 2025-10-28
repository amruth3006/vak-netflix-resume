import { ReactNode } from "react";
import clsx from "clsx";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={clsx(
        "bg-zinc-900 rounded-xl border border-zinc-700 shadow-[0_0_40px_rgba(229,9,20,0.20)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: ReactNode }) {
  return <div className="p-4 border-b border-zinc-700">{children}</div>;
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <div className="text-white font-semibold text-sm">{children}</div>;
}

export function CardContent({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 text-[11px] text-zinc-400 leading-snug">{children}</div>
  );
}
