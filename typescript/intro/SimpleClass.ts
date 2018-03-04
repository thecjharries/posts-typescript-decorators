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
    public get bar() {
        return "bar";
    }

    @MethodDecorator
    public writeGreeting(
        @ParameterDecorator public greeting: string = "Hello, world"
    ) {
        console.log(greeting);
    }
}

const demo = new SimpleClass();
