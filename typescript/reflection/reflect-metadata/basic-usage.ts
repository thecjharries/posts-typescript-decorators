import "reflect-metadata";

class BasicUsage {
    constructor() {
        // Explicitly define some metadata
        // key, value, target, propertyKey
        Reflect.defineMetadata("foo1", "bar1", this, "baz");
    }

    // Define metadata via a decorator
    // key, value
    @Reflect.metadata("foo2", "bar2")
    public baz() {
        // do nothing
    }
}

const demoBasicUsage = new BasicUsage();

// key, target, propertyKey
console.log(Reflect.getMetadata("foo1", basicUsageDemo, "baz"));
// bar1
console.log(Reflect.getMetadata("foo2", basicUsageDemo, "baz"));
// bar2
