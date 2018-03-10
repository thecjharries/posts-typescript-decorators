function LogProperty(
    target: any,
    propertyKey: string | symbol,
) {
    console.log(target);
    console.log(propertyKey);
}

class PropertyExample {
    @LogProperty
    public greeting: string;

    constructor() {
        this.greeting = "Hello, world";
    }
}

const demoExample = new PropertyExample();
