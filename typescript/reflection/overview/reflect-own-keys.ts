// This object will have prop = "cool"
class RootObject {
    public prop: string = "cool";
}

// Its prototype will have foo = "bar"
RootObject.prototype = { foo: "bar" } as any;

// Create an instance
const root = new RootObject();

// for...in moves up the prototype chain
for (const key in root) {
    console.log(key);
}
// prop
// foo

// hasOwnProperty will prevent this
// but requires an extra conditional
for (const key in root) {
    if (root.hasOwnProperty(key)) {
        console.log(key);
    }
}
// prop

// Reflect.ownKeys solves it in one line
for (const key of Reflect.ownKeys(root)) {
    console.log(key);
}
// prop
