"use client";
import React, { useState, useRef, useEffect } from "react";
import { Result, Vehicle } from "../types/Vehicles";

interface SelectProps {
  label: string;
  options: Vehicle | string[];
  value: string;
  onChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(value);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const isVehicle = (opts: Vehicle | string[]): opts is Vehicle => !Array.isArray(opts);

  const handleSelect = (val: string) => {
    setSelectedValue(val);
    onChange(val);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative px-[0] py-[10px]" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div
        className="relative cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div
          tabIndex={0}
          className="py-2 px-4 text-gray-700 transition-all rounded-md focus:border-[#2E90FA] focus:shadow-[0px_0px_0px_4px_#84CAFF3D]"
        >
          {selectedValue ? selectedValue : label}
        </div>
        {isOpen && (
          <div
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            {isVehicle(options) ? (
              options.Results.map((option: Result, i: number) => (
                <div
                  key={i}
                  onClick={() => handleSelect(String(option.MakeId))}
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                >
                  {option.MakeName}
                </div>
              ))
            ) : (
              options.map((option: string, i: number) => (
                <div
                  key={i}
                  onClick={() => handleSelect(option)}
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                >
                  {option}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
