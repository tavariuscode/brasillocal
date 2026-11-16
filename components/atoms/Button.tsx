import React from "react";
import Link from "next/link";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "cta"
  | "pillActive"
  | "pillInactive";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  children,
  onClick,
  href,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const estilos: Record<ButtonVariant, string> = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white font-bold",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white font-semibold",
    cta: "bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold",
    pillActive: "bg-slate-900 text-white shadow-sm font-semibold",
    pillInactive: "bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold",
  };

  const classesFinais = `transition-colors text-center ${estilos[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classesFinais}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classesFinais}>
      {children}
    </button>
  );
}
