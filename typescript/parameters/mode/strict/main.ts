function DecoratedParameter(
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number,
) {
    try {
        console.log("this.constructor.name:", this.constructor.name);
        console.log("target.constructor.name:", target.constructor.name);
        console.log(`this ${this === target ? "=" : "!"}== target`);
    } catch (error) {
        console.log("TypeError: Cannot read property 'constructor' of undefined");
    }
    target.stringProperty = "changed in decorator";
}

class StrictModeClass {
    public stringProperty: string;
    constructor() {
        console.log(this.stringProperty);
    }
    public foo(@DecoratedParameter bar: any) {
        // do nothing
    }
}

const strictModeDemo = new StrictModeClass();
