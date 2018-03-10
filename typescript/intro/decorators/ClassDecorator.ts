export function ClassDecorator(
    constructor: Function,
) {
    console.log(`Decorating ${constructor.name}`);
}
