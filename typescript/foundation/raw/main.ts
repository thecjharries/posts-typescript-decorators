function Enumerable(
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
) {
    descriptor.enumerable = true;
    return descriptor;
}

class RawDemoClass {
    @Enumerable
    public foo() {
        // do nothing
    }
}

const demo = new RawDemoClass();
