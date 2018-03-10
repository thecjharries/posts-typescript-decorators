export function ClassDecorator(
    constructor: (...args: any[]) => any,
) {
    console.log(`Decorating ${constructor.name}`);
}
