import React from "react";

export default function Textarea({ label, name, value, onChange, placeholder, required, error, className, ...rest }) {
  return (
    <div className="mb-6">
      {label && (
        <label htmlFor={name} className="block mb-2 text-xl font-bold text-white">
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        className={`border-2 border-black text-base font-extrabold focus:border-yellow focus-visible:outline-yellow-base block w-full ${className}`}
        placeholder={placeholder}
        required={required}
        error={error}
        //onChange={onChange}
      ></textarea>
    </div>
  );
}
