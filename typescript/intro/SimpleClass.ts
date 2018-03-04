import { ClassDecorator } from "./decorators/ClassDecorator";
import { MethodDecorator } from "./decorators/MethodDecorator";
import { ParameterDecorator } from "./decorators/ParameterDecorator";
import { PropertyDecorator } from "./decorators/PropertyDecorator";

@ClassDecorator
class SimpleClass {
    @PropertyDecorator
    public foo: string = "foo";

    constructor() {
        console.log("Simple class initialized");
        this.writeGreeting();
    }

    @MethodDecorator
    public bar() {
        console.log("bar executed");
    }

    @MethodDecorator
    public get baz() {
        return "baz";
    }

    public writeGreeting(
        @ParameterDecorator public greeting: string = "Hello, world"
    ) {
        console.log(greeting);
    }
}

const demo = new SimpleClass();
