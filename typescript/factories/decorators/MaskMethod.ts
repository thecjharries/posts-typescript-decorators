export function MaskMethod(hide: boolean) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        if (hide) {
            return {
                get: undefined,
            };
        }
        return descriptor;
    }
}
