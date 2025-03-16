import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  className,
}: ButtonProps) {
  const baseStyles =
    "px-5 py-2 rounded-xl text-white text-lg font-semibold transition-all duration-200 ease-in-out";

  const variants = {
    primary:
      "bg-blue-500 hover:bg-blue-600 active:scale-95 shadow-lg shadow-blue-500/50",
    secondary:
      "bg-gray-700 hover:bg-gray-800 active:scale-95 shadow-lg shadow-gray-700/50",
    danger:
      "bg-red-500 hover:bg-red-600 active:scale-95 shadow-lg shadow-red-500/50",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
