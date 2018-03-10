function DecoratedParameter(
    target: any,
    propertyKey: string,
    parameterIndex: number
) { }

class TargetDemo {
    public foo(baz: any, @DecoratedParameter bar: any) { }
}
