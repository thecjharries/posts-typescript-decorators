import "reflect-metadata";

function LogMethod(
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
) {
    // Checks the type of the decorated object
    console.log(Reflect.getMetadata("design:type", target, propertyKey));
    // [Function: Function]
    // Checks the types of all params
    console.log(Reflect.getMetadata("design:paramtypes", target, propertyKey));
    // [[Function: Number]]
    // Checks the return type
    console.log(Reflect.getMetadata("design:returntype", target, propertyKey));
    // undefined
}

class MethodDemoClass {
    @LogMethod
    public foo(bar: number) {
        // do nothing
    }
}
const methodDemo = new MethodDemoClass();
