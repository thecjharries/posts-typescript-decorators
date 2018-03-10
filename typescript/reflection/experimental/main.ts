function LogMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}

class MethodDemoClass {
    @LogMethod
    public foo(bar: number) {
        // do nothing
    }
}
const methodDemo = new MethodDemoClass();
