import { HasDecoratedProperty } from "./HasDecoratedProperty";

// Pick a set of values
for (const newValue of [-10, 10, 20]) {
    // Create a new instance
    const demo = new HasDecoratedProperty();
    // Add a basic linebreak
    if (newValue > -10) {
        console.log("---");
    }
    // Log the current value
    console.log("Current value:", demo.currentValue);
    // Update the value
    console.log(`Attempting to set demo.currentValue = ${newValue}`);
    demo.currentValue = newValue;
    // Log the current value
    console.log("Current value:", demo.currentValue);
}
// Add a basic linebreak
console.log("---");
// Create a new instance
const demo1 = new HasDecoratedProperty();
// Update its value
console.log("Setting demo1.currentValue = -10");
demo1.currentValue = -10;
console.log("demo1.currentValue:", demo1.currentValue);
// Create a new instance
const demo2 = new HasDecoratedProperty();
// Update its value
console.log("Setting demo2.currentValue = 20");
demo2.currentValue = 20;
// Compare the results
console.log("demo1.currentValue:", demo1.currentValue);
console.log("demo2.currentValue:", demo2.currentValue);
