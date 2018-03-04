export function PropertyDecorator(
    target: any,
    propertyKey: any
) {
    console.log(
        `Decorating property ${propertyKey}` +
        ` from ${target.constructor.name}`
    );
}
