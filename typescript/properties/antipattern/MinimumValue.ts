export function MinimumValue(min: number = 0) {
    // Scope the value to be reused
    let value: number;
    return (target: any, propertyKey: string | symbol) => {
        // Store the definition result
        const update = Reflect.defineProperty(
            target,
            propertyKey,
            {
                configurable: true,
                enumerable: true,
                get: () => {
                    // Return the scoped value
                    return value;
                },
                set: (newValue: number) => {
                    // Update the scoped value with max(newValue, min)
                    value = (
                        newValue >= min
                            ? newValue
                            : min
                    );
                }
            },
        );
        // If the update failed, something went wrong
        if (!update) {
            // Kill everything
            throw new Error("Unable to update property");
        }
    }
}
