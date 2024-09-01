import React from 'react';
import {VehicleModel} from "@/shared/types/Vehicles";

interface ResultItem {
    model: VehicleModel
}

export const ResultItem = ({model}: ResultItem) => {
    return (
        <li key={model.Model_ID} className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{model.Make_Name}</h2>
        </li>
    );
};