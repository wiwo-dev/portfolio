import React from "react";

export default function Input({ label, type, name, onChange, placeholder, required, maxW, error, className, ...rest }) {
  return (
    <div className="mb-2">
      {label && (
        <label htmlFor={name} className="block mb-2 text-xl font-bold text-white">
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        className={`border-2 border-black text-lg font-extrabold rounded-lg focus:border-yellow focus-visible:outline-pink block w-full ${className}`}
        placeholder={placeholder}
        required={required}
        error={error}
        {...rest}
        onChange={onChange}
      />
    </div>
  );
}
