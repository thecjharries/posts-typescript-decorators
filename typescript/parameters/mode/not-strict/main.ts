function DecoratedParameter(
    target: any,
    propertyKey: string,
    parameterIndex: number,
) {
    console.log("this.constructor.name:", this.constructor.name);
    console.log("target.constructor.name:", target.constructor.name);
    console.log(`this ${this === target ? '=' : '!'}== target`);
    target.stringProperty = "changed in decorator";
}

class NotStrictModeClass {
    public stringProperty: string;
    constructor() {
        console.log(this.stringProperty);
    }
    public foo(@DecoratedParameter bar: any) { }
}

const notStrictModeDemo = new NotStrictModeClass();
