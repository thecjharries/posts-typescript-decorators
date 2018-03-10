import "reflect-metadata";

import { REQUIRED_KEY } from "./constants";
import { Required } from "./Required";

class RequiredDemoClass {
    public foo(
        @Required bar1: any,
        bar2: any,
        @Required bar3: any,
    ) { }
}

// Not defined on the class itself
console.log(Reflect.getMetadata(
    REQUIRED_KEY,
    RequiredDemoClass,
    "foo"
));
// undefined

// Create an instance
const requiredDemo = new RequiredDemoClass();
// Defined on instances of the class
console.log(Reflect.getMetadata(
    REQUIRED_KEY,
    requiredDemo,
    "foo"
));
// [ 0, 2 ]
