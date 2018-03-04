function LogParameter(
    target: any,
    propertyKey: string,
    parameterIndex: number
) {
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
}

class ParameterDemoClass {
    public logThis(
        first: string = "",
        @LogParameter greeting: string = "Hello, world"
    ) {
        // do nothing
    }
}

const parameterDemo = new ParameterDemoClass();
