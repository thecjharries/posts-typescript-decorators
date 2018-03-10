function DecoratedParameter(
    target: any,
    propertyKey: string,
    parameterIndex: number,
) {
    // do nothing
}

class TargetDemo {
    public foo(baz: any, @DecoratedParameter bar: any) {
        // do nothing
    }
}
