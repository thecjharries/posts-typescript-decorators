import "reflect-metadata";

import { PROPERTY_METADATA_KEY } from "./constants";
import { PropertyMetadata } from "./PropertyMetadata";

class Demo {
    @PropertyMetadata({
        name: "foo",
    })
    public foo: any;
    @PropertyMetadata({
        description: "property bar",
    })
    public bar: any;
    @PropertyMetadata({
        name: "baz",
        description: "property baz",
    })
    public baz: any;
}

// The metadata is not defined on the class
console.log(
    "Class property metadata:",
    Reflect.getMetadata(PROPERTY_METADATA_KEY, Demo),
);
// It's defined on an instance
const demo = new Demo();
console.log(
    "Instance property metadata:",
    Reflect.getMetadata(PROPERTY_METADATA_KEY, demo),
);
