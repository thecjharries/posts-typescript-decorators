export function ParameterDecorator(
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number,
) {
    console.log(
        `Decorating parameter ${propertyKey}` +
        ` (index ${parameterIndex})` +
        ` from ${target.constructor.name}`,
    );
}
