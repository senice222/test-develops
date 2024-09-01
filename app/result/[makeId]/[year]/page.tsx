import React from "react";
import { Result, Vehicle } from "@/shared/types/Vehicles";
import "../../../../envConfig";
import { fetchVehicleModels, getAllVehicles } from "@/shared/services/get-vehicle-models";
import { notFound } from 'next/navigation';
import * as Component from '../../../../shared/components/result/index'

// Maybe we can use SSG here because this page doesn’t change often.

export async function generateStaticParams() {
  const data: Vehicle | null = await getAllVehicles();
  if (!data) {
    return notFound();
  };

  return data.Results.map((vehicle: Result) => ({
    id: vehicle.MakeId
  }));
}

const ResultPage: React.FC<{ params: { makeId: string; year: string } }> = async ({ params }) => {
  const { makeId, year } = params;
  const result = await fetchVehicleModels(makeId, year);

  if (!result) {
    return notFound();
  }

  return <Component.ResultList result={result.Results} />;
};

export default ResultPage;
