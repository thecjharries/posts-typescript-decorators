import { Enumerable } from "./decorators/Enumerable";

class SimpleClass {

    @Enumerable(true)
    public isEnumerable() {
        // do nothing
    }

    @Enumerable(true)
    @Enumerable(false)
    public resultIsEnumerable() {
        // do nothing
    }

    @Enumerable(false)
    public isNotEnumerable() {
        // do nothing
    }

    @Enumerable(false)
    @Enumerable(true)
    public resultIsNotEnumerable() {
        // do nothing
    }
}

const demo = new SimpleClass();

for (const key in demo) {
    console.log(key);
}
