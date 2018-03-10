function LogParameter(
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number,
) {
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
}

class ParameterExample {
    public logThis(
        first: string = "",
        @LogParameter greeting: string = "Hello, world",
    ) {
        // do nothing
    }
}

const demoParameter = new ParameterExample();
