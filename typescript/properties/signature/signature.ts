type PropertyDecoratorType = (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
) => void;
