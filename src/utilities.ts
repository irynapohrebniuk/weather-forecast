export class Utilities {
    static calculate(kelvin: number): number {
        return Math.ceil(kelvin - 272.15);
    }
}
