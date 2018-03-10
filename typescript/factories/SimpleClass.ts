import { Decorator } from "./decorators/Decorator";

@Decorator("class")
class SimpleClass {
    @Decorator("property")
    public foo: string = "foo";

    constructor() {
        console.log("Simple class initialized");
        this.writeGreeting();
    }

    @Decorator("accessor")
    public get bar() {
        return "bar";
    }

    @Decorator("method")
    public writeGreeting(
        @Decorator("parameter") public greeting: string = "Hello, world",
    ) {
        console.log(greeting);
    }
}

const demo = new SimpleClass();
