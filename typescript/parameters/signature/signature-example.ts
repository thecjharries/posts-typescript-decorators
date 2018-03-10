function DecoratedParameter(
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number,
) {
    // do nothing
}

class TargetDemo {
    public foo(baz: any, @DecoratedParameter bar: any) {
        // do nothing
    }
}
