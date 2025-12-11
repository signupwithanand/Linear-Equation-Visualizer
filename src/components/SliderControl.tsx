'use client';

import React from 'react';

interface SliderControlProps {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (val: number) => void;
    colorClass?: string;
    description?: string;
}

const SliderControl: React.FC<SliderControlProps> = ({
    label,
    value,
    min,
    max,
    step,
    onChange,
    colorClass = "text-slate-900",
    description
}) => {
    return (
        <div className="group">
            <div className="flex justify-between items-center mb-2">
                <label className={`text-sm font-bold ${colorClass}`}>
                    {label}
                </label>
                <span className="font-mono text-sm bg-slate-100 px-2 py-0.5 rounded text-slate-700 w-16 text-center">
                    {value.toFixed(1)}
                </span>
            </div>

            <div className="relative h-6 flex items-center">
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => onChange(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 accent-indigo-600 z-10 relative"
                />
            </div>

            {description && (
                <p className="text-xs text-slate-500 mt-1.5 font-light">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SliderControl;
