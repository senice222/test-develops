export interface Vehicle {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: Result[];
}

type VehicleWithoutResults = Omit<Vehicle, 'Results'>;

export interface FilteredVehicles extends VehicleWithoutResults {
  Results: VehicleModel[];
}

export interface VehicleModel {
  Make_ID: number;
  Model_ID: number;
  Model_Name: string;
  Make_Name: string;
}

export interface Result {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}
