function LogClass(target: any) {
    console.log(target.constructor.name);
}

@LogClass
class ClassExample {
    // do nothing
}

const demoClass = new ClassExample();
