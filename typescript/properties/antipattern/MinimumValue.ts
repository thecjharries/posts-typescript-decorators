export function MinimumValue(min: number = 0) {
    let value: number;
    return (target: any, propertyKey: string | symbol) => {
        const update = Reflect.defineProperty(
            target,
            propertyKey,
            {
                configurable: true,
                enumerable: true,
                get: () => {
                    return value;
                },
                set: (newValue: number) => {
                    value = (
                        newValue >= min
                            ? newValue
                            : min
                    );
                }
            },
        );
        if (!update) {
            throw new Error("Unable to update property");
        }
    }
}
