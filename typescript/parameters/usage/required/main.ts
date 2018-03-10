import "reflect-metadata";

import { REQUIRED_KEY } from "./constants";
import { Required } from "./Required";

class Demo {
    public foo(
        @Required bar1: any,
        bar2: any,
        @Required bar3: any,
    ) {
        // do nothing
    }
}

// Not defined on the class itself
console.log(Reflect.getMetadata(
    REQUIRED_KEY,
    Demo,
    "foo",
));
// undefined

// Create an instance
const demo = new Demo();
// Defined on instances of the class
console.log(Reflect.getMetadata(
    REQUIRED_KEY,
    demo,
    "foo",
));
// [ 0, 2 ]
