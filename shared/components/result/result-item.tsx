import React from 'react';
import {VehicleModel} from "@/shared/types/Vehicles";

interface ResultItem {
    model: VehicleModel
}

export const ResultItem = ({model}: ResultItem) => {
    return (
        <div key={model.Model_ID} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{model.Make_Name}</h2>
            <p className="text-lg text-gray-600 mb-4">{model.Model_Name}</p>
            <div className="text-sm text-gray-500">
                <p><span className="font-semibold">Make ID:</span> {model.Make_ID}</p>
                <p><span className="font-semibold">Model ID:</span> {model.Model_ID}</p>
            </div>
        </div>
    );
};