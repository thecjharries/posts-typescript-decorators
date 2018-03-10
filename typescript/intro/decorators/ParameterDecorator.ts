export function ParameterDecorator(
    target: Object,
    propertyKey: string,
    parameterIndex: number,
) {
    console.log(
        `Decorating parameter ${propertyKey}` +
        ` (index ${parameterIndex})` +
        ` from ${target.constructor.name}`
    );
}
