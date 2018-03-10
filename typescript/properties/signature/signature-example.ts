function DecoratedProperty(
    target: any,
    propertyKey: string | symbol,
) {
    // do nothing
}

class TargetDemo {
    @DecoratedProperty
    public foo: string = "bar";
}
