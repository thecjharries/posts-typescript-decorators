import { MaskMethod } from "./decorators/MaskMethod";

class MaskableMethodsClass {
    @MaskMethod(true)
    public foo() {
        console.log("foo");
    }

    @MaskMethod(false)
    public bar() {
        console.log("bar");
    }
}

const demo = new MaskableMethodsClass();

for (const key of ["foo", "bar"]) {
    console.log(key, demo[key]);
}
