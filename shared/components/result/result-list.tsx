import React from "react";
import { VehicleModel } from "../../types/Vehicles";
import * as Component from "@/shared/components/result/index";

interface ResultListProps {
  result: VehicleModel[];
}

export const ResultList: React.FC<ResultListProps> = ({ result }) => {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Vehicle Models</h1>
      <ul className="space-y-2">
        {
          result.map((model, i) => (
            <Component.ResultItem key={i} model={model} />
          ))
        }
      </ul>
    </div>
  );
};