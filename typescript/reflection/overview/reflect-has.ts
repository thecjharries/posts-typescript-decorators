// The visibility compiles out but whatever
class Demo {
    public foo: number = 1;
    protected bar: number = 2;
    private baz: number = 3;
}

// Create an instance
const demo = new Demo();

console.log(Reflect.has(demo, "foo"));
// true
console.log(Reflect.has(demo, "bar"));
// true
console.log(Reflect.has(demo, "baz"));
// true
console.log(Reflect.has(demo, "qqq"));
// false
