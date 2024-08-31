import React from "react";
import { Result, Vehicle } from "@/shared/types/Vehicles";
import "../../../../envConfig";
import { fetchVehicleModels, getAllVehicles } from "@/shared/services/get-vehicle-models";
import ResultList from "@/shared/components/result/result-list";
import { notFound } from 'next/navigation';

// I was thinking about adding suspense anywhere, but didn't find some case where i can use it. Everywhere using SSR
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

  return <ResultList result={result.Results} />;
};

export default ResultPage;
