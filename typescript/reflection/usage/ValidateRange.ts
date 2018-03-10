import "reflect-metadata";

import { RANGE_KEY } from "./constants";

export function ValidateRange(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
) {
    // Store the original value
    const savedValue = descriptor.value;
    // Attach validation logic
    descriptor.value = (...args: any[]) => {
        // Pull the active ranges (if any)
        const monitoredRanges: { [key: number]: number[] } = (
            Reflect.getOwnMetadata(
                RANGE_KEY,
                target,
                propertyKey,
            )
            ||
            {}
        );
        // Check all monitored ranges
        // tslint:disable-next-line:forin
        for (const key in Reflect.ownKeys(monitoredRanges)) {
            const range = monitoredRanges[key];
            const value = args[key];
            // Throw error if outside range
            if (value < range[0] || value > range[1]) {
                throw new Error('Value outside of range');
            }
        }
        // Actually call the function
        return Reflect.apply(savedValue, target, args);
    };
}
