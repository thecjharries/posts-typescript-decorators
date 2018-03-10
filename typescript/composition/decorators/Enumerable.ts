export function Enumerable(enumerable: boolean = true) {
    console.log(
        `Creating ${enumerable ? '' : 'non-'}` +
        `enumerable property factory`
    );
    return function decorator(
        target: any,
        propertyKey: any,
        descriptor: PropertyDescriptor,
    ) {
        console.log(
            `Making ${propertyKey}` +
            ` ${enumerable ? '' : 'non-'}enumerable`
        );
        descriptor.enumerable = enumerable;
        return descriptor;
    }
}
