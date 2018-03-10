function DecoratedParameter(
    target: any,
    propertyKey: string,
    parameterIndex: number
) {
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
}

class TargetDemo {
    public foo(baz: any, @DecoratedParameter bar: any) {
        console.log("Class method foo");
    }
}
