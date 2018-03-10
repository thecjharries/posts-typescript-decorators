export function PropertyDecorator(
    target: any,
    propertyKey: string | symbol,
) {
    console.log(
        `Decorating property ${propertyKey}` +
        ` from ${target.constructor.name}`,
    );
}
