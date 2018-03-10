function Enumerable(
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
) {
    descriptor.enumerable = true;
    return descriptor;
}

class Demo {
    @Enumerable
    public foo() {
        // do nothing
    }
}

const demo = new Demo();
