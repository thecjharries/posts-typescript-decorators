import "reflect-metadata";

class BasicUsageDemoClass {
    constructor() {
        // Explicitly define some metadata
        Reflect.defineMetadata("foo1", "bar1", this, "baz");
    }

    // Define metadata via a decorator
    @Reflect.metadata("foo2", "bar2")
    public baz() {
        // do nothing
    }
}

const basicUsageDemo = new BasicUsageDemoClass();

console.log(Reflect.getMetadata("foo1", basicUsageDemo, "baz"));
// bar1
console.log(Reflect.getMetadata("foo2", basicUsageDemo, "baz"));
// bar2
