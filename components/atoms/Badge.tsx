import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "bg-slate-100 text-slate-800",
}: BadgeProps) {
  return (
    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${className}`}>
      {children}
    </span>
  );
}
