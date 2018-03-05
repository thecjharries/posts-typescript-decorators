// The visibility compiles out but whatever
class HasDemoClass {
    public foo: number = 1;
    protected bar: number = 2;
    private baz: number = 3;
}

// Create an instance
const hasDemo = new HasDemoClass();

console.log(Reflect.has(hasDemo, "foo"));
// true
console.log(Reflect.has(hasDemo, "bar"));
// true
console.log(Reflect.has(hasDemo, "baz"));
// true
console.log(Reflect.has(hasDemo, "qqq"));
// false
