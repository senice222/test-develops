import { FilteredVehicles, Vehicle } from "@/shared/types/Vehicles";
import { axiosInstance } from "@/shared/services/instance";


export async function fetchVehicleModels(makeId: string, year: string): Promise<FilteredVehicles | null> {
  try {
    return (await axiosInstance.get(`/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)).data;
  } catch (e) {
    console.error("error detailed vehicle models:", e);
    return null
  }
}

export async function getAllVehicles(): Promise<Vehicle | null> {
  try {
    return (await axiosInstance.get('/vehicles/GetMakesForVehicleType/car?format=json')).data;
  } catch (e) {
    console.error("error vehicle models:", e);
    return null
  }
}