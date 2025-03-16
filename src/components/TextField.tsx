import React from "react";
import { FiUser, FiLock, FiMail } from "react-icons/fi"; // Icons für verschiedene Felder

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | ""; // "" für kein Icon
  value: string;
  onChange: (value: string) => void;
}

export function TextField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: TextFieldProps) {
  const getIcon = () => {
    switch (type) {
      case "password":
        return <FiLock className="text-gray-500" size={18} />;
      case "email":
        return <FiMail className="text-gray-500" size={18} />;
      case "text":
        return <FiUser className="text-gray-500" size={18} />;
      case "": // Falls kein Icon gewünscht ist
        return null;
      default:
        return null;
    }
  };

  const icon = getIcon();
  const paddingLeft = icon ? "pl-10" : "pl-4"; // Dynamische Padding-Anpassung

  return (
    <div className="w-full">
      {/* Label falls vorhanden */}
      {label && (
        <label className="block text-gray-700 text-sm font-medium mb-1">
          {label}
        </label>
      )}

      {/* Input-Wrapper für bessere Optik */}
      <div className="relative flex items-center bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-300 focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-200">
        {icon && <span className="absolute left-3">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full ${paddingLeft} pr-4 py-2 bg-transparent outline-none text-gray-900 placeholder-gray-500 rounded-xl`}
        />
      </div>
    </div>
  );
}
