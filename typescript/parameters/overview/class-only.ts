function DecoratedParameter(
    target: any,
    propertyKey: string,
    parameterIndex: number
) {
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
}

class TargetDemo {
    public foo1(baz: any, @DecoratedParameter bar: any) {
        console.log("Class method foo");
    }
}

function foo2(baz: any, @DecoratedParameter bar: any) {
    console.log("Global function foo");
}

const test = new TargetDemo();
test.foo1("class baz", "class bar");
foo2("function baz", "function bar");
