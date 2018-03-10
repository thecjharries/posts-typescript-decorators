function DecoratedProperty(
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
) {
    // do nothing
}

class TargetDemo {
    @DecoratedProperty
    public foo: string = "bar";
}

const demo = new TargetDemo();

console.log(Reflect.getOwnPropertyDescriptor(demo, "foo"));
