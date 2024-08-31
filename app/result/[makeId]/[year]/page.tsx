import React from 'react';
import { FilteredVehicles, VehicleModel } from "@/shared/types/Vehicles";
import '../../../../envConfig'
import { fetchVehicleModels } from "@/shared/services/get-vehicle-models";
import ResultList from "@/shared/components/result/result-list";

// I was thinking about adding suspense anywhere, but didn't find some case where i can use it. Everywhere using SSR

export async function generateStaticParams() {
    const vehicles: FilteredVehicles = await fetch(`${process.env.API_URL}/vehicles/GetMakesForVehicleType/car?format=json`).then((res) => res.json());

    return vehicles.Results.map((vehicle: VehicleModel) => ({
        id: vehicle.Make_ID,
    }));
}

const ResultPage: React.FC<{ params: { makeId: string; year: string } }> = async ({params}) => {
    const {makeId, year} = params;
    const result = await fetchVehicleModels(makeId, year);

    return <ResultList result={result.Results}/>
};

export default ResultPage;
