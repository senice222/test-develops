import * as Component from '../shared/components/filter-form'
import '../envConfig'
import { getAllVehicles } from "@/shared/services/get-vehicle-models";
import { notFound } from 'next/navigation';

export default async function HomePage() {
    const res = await getAllVehicles()
    if (!res) {
        return notFound();
    }

    return (
        <main className="h-screen flex justify-center items-center">
            <div className="flex flex-col gap-4">
                <Component.FilterForm data={res} />
            </div>
        </main>
    );
}
