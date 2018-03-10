import { HasDecoratedProperty } from "./HasDecoratedProperty";

for (const newValue of [-10, 10, 20]) {
    const demo = new HasDecoratedProperty();
    if (newValue > -10) {
        console.log("---");
    }
    console.log("Current value:", demo.currentValue);
    console.log(`Attempting to set demo.currentValue = ${newValue}`);
    demo.currentValue = newValue;
    console.log("Current value:", demo.currentValue);
}

console.log("---");
const demo1 = new HasDecoratedProperty();
console.log("Setting demo1.currentValue = -10");
demo1.currentValue = -10;
console.log("demo1.currentValue:", demo1.currentValue);
const demo2 = new HasDecoratedProperty();
demo2.currentValue = 20;
console.log("Setting demo2.currentValue = 20");
console.log("demo1.currentValue:", demo1.currentValue);
console.log("demo2.currentValue:", demo2.currentValue);
