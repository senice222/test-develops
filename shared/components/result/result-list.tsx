import React from "react";
import { VehicleModel } from "../../types/Vehicles";

interface ResultListProps {
  result: VehicleModel[];
}

const ResultList: React.FC<ResultListProps> = ({ result }) => {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Vehicle Models</h1>
      <ul className="space-y-2">
        {
          result.map((model) => (
            <li key={model.Model_ID} className="bg-gray-100 p-4 rounded shadow">
              <h2 className="text-lg font-semibold">{model.Make_Name}</h2>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default ResultList;
