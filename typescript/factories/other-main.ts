import { MaskMethod } from "./decorators/MaskMethod";

class MaskableMethods {
    @MaskMethod(true)
    public foo() {
        console.log("foo");
    }

    @MaskMethod(false)
    public bar() {
        console.log("bar");
    }
}

const demoMaskableMethods = new MaskableMethods();

for (const key of ["foo", "bar"]) {
    console.log(key, demoMaskableMethods[key]);
}
