function LogProperty(
    target: any,
    propertyKey: string | symbol,
) {
    console.log(target);
    console.log(propertyKey);
}

class PropertyDemoClass {
    @LogProperty
    public greeting: string;

    constructor() {
        this.greeting = "Hello, world";
    }
}
const propertyDemo = new PropertyDemoClass();
