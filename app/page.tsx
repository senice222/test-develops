import * as Component from '../shared/components/filter-form'
import {Vehicle} from '@/shared/types/Vehicles';
import '../envConfig'
import { getAllVehicles } from "@/shared/services/get-vehicle-models";

export default async function HomePage() {
    const res = await getAllVehicles()

    return (
        <main className="h-screen flex justify-center items-center">
            <div className="flex flex-col gap-4">
                <Component.FilterForm data={res}/>
            </div>
        </main>
    );
}
