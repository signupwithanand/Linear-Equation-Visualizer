'use client';

import React, { useState } from 'react';
import { Mafs, Coordinates, Plot, Point, Theme } from 'mafs';
import { Sliders, RefreshCw, Maximize } from 'lucide-react';
import { formatLinearEquation } from '@/utils/math';
import SliderControl from './SliderControl';

export const LinearGraph: React.FC = () => {
    const [m, setM] = useState<number>(1);
    const [c, setC] = useState<number>(0);

    // Axis boundaries state
    const [xMin, setXMin] = useState<number>(-5);
    const [xMax, setXMax] = useState<number>(5);
    const [yMin, setYMin] = useState<number>(-5);
    const [yMax, setYMax] = useState<number>(5);

    const fn = (x: number) => m * x + c;

    const handleReset = () => {
        setM(1);
        setC(0);
        setXMin(-5);
        setXMax(5);
        setYMin(-5);
        setYMax(5);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">

            {/* Graph Area */}
            <div className="flex-grow h-[400px] lg:h-[600px] bg-slate-50 relative order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-slate-100">
                <Mafs
                    viewBox={{ x: [xMin, xMax], y: [yMin, yMax] }}
                    pan={true}
                    height={600}
                >
                    <Coordinates.Cartesian
                        subdivisions={2}
                    />

                    <Plot.OfX
                        y={fn}
                        color={Theme.indigo}
                        weight={3}
                    />

                    {/* Highlight the Y-Intercept */}
                    <Point
                        x={0}
                        y={c}
                        color={Theme.red}
                    />

                </Mafs>

                {/* Floating Equation Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-slate-200 pointer-events-none">
                    <span className="font-mono text-lg font-semibold text-slate-800">
                        {formatLinearEquation(m, c)}
                    </span>
                </div>

                <div className="absolute bottom-4 right-4 text-xs text-slate-400 bg-white/80 px-2 py-1 rounded">
                    Scroll to zoom • Drag to pan
                </div>
            </div>

            {/* Controls Area */}
            <div className="w-full lg:w-80 bg-white p-6 lg:p-8 flex flex-col gap-8 order-1 lg:order-2 shrink-0 z-10 overflow-y-auto max-h-[600px]">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <Sliders className="w-5 h-5 text-slate-500" />
                        Controls
                    </h2>
                    <button
                        onClick={handleReset}
                        className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-1 bg-slate-50 hover:bg-slate-100 px-2 py-1 rounded"
                        title="Reset to default"
                    >
                        <RefreshCw className="w-3 h-3" />
                        Reset
                    </button>
                </div>

                {/* Sliders */}
                <div className="space-y-8">
                    <SliderControl
                        label="Slope (m)"
                        value={m}
                        min={-10}
                        max={10}
                        step={0.1}
                        onChange={setM}
                        colorClass="text-indigo-600"
                        description="Controls steepness."
                    />

                    <SliderControl
                        label="Y-Intercept (c)"
                        value={c}
                        min={-10}
                        max={10}
                        step={0.1}
                        onChange={setC}
                        colorClass="text-red-500"
                        description="Moves vertical position."
                    />
                </div>

                {/* Axis Controls */}
                <div className="border-t border-slate-100 pt-6">
                    <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2 mb-4">
                        <Maximize className="w-4 h-4 text-slate-500" />
                        Graph Boundaries
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-slate-500 block">Min X</label>
                            <input
                                type="number"
                                value={xMin}
                                onChange={(e) => setXMin(Number(e.target.value))}
                                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-slate-500 block">Max X</label>
                            <input
                                type="number"
                                value={xMax}
                                onChange={(e) => setXMax(Number(e.target.value))}
                                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-slate-500 block">Min Y</label>
                            <input
                                type="number"
                                value={yMin}
                                onChange={(e) => setYMin(Number(e.target.value))}
                                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-slate-500 block">Max Y</label>
                            <input
                                type="number"
                                value={yMax}
                                onChange={(e) => setYMax(Number(e.target.value))}
                                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="mt-auto pt-6 border-t border-slate-100">
                    <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-xs text-blue-800 leading-relaxed">
                            When <strong>m = 0</strong>, the line is horizontal.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};
