function LogMethod(
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}

class MethodExample {
    @LogMethod
    public foo() {
        // do nothing
    }
}
const demoMethod = new MethodExample();
