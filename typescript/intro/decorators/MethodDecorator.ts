export function MethodDecorator(
    target: any,
    propertyKey: any,
    descriptor: PropertyDescriptor,
) {
    console.log(
        `Decorating method ${propertyKey}` +
        ` from ${target.constructor.name}`
    );
}
