import { FilteredVehicles, Vehicle } from "@/shared/types/Vehicles";
import { axiosInstance } from "@/shared/services/instance";


export async function fetchVehicleModels(makeId: string, year: string): Promise<FilteredVehicles> {
  return (await axiosInstance.get(`/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)).data;
}

export async function getAllVehicles(): Promise<Vehicle> {
  return (await axiosInstance.get('/vehicles/GetMakesForVehicleType/car?format=json')).data;
}