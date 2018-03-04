function LogClass(target: any) {
    console.log(target.constructor.name);
}

@LogClass
class ClassDemoClass {
    // do nothing
}

const classDemo = new ClassDemoClass();
