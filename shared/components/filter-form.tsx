'use client'
import React, { useState } from 'react';
import * as Component from '../components/index'
import { Vehicle } from '../types/Vehicles';
import {generateYearSequence} from "@/shared/lib/generate-year-sequence";

interface FilterFormProps {
    data: Vehicle;
}

export const FilterForm: React.FC<FilterFormProps> = ({ data }) => {
    const years = [...generateYearSequence(2015, new Date().getFullYear())];
    const [vehicleType, setVehicleType] = useState<string>('');
    const [modelYear, setModelYear] = useState<string>('');

    // here can be used suspense, but this component renders using SSR, so i think it should be without it
    return (
        <div className="w-[300px]">
            <Component.Select
                label="Vehicle Type"
                options={data}
                value={vehicleType}
                onChange={setVehicleType}
            />
            <Component.Select
                label="Model Year"
                options={years}
                value={modelYear}
                onChange={setModelYear}
            />
            <Component.Button
                text="Next"
                disabled={!vehicleType || !modelYear}
                href={`/result/${vehicleType}/${modelYear}`}
            />
        </div>
    );
};

