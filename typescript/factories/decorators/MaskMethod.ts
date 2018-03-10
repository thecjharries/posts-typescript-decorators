export function MaskMethod(hide: boolean) {
    return (
        target: any,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor,
    ) => {
        if (hide) {
            return {
                get: undefined,
            };
        }
        return descriptor;
    };
}
