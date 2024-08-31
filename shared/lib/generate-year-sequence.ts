
export function generateYearSequence(start: number, end: number): string[] {
    const years: string[] = [];
    for (let year = start; year <= end; year++) {
        years.push(year.toString());
    }
    return years;
}