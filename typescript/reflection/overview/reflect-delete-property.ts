(() => {
    "use strict";
    const sampleDeleteObject = {
        one: 1,
        three: 3,
        two: 2,
    };

    // Delete a property with delete
    console.log(delete sampleDeleteObject.one);
    // true
    // Delete a property with Reflect
    console.log(Reflect.deleteProperty(sampleDeleteObject, "two"));
    // true
    console.log(sampleDeleteObject);
    // { three: 3 }
    // Accidentally try to delete an object
    try {
        // tslint:disable-next-line:no-eval
        console.log(eval("delete sampleDeleteObject"));
    } catch (error) {
        // do nothing
    }
    // Accidentally try to delete an object
    console.log(Reflect.deleteProperty(sampleDeleteObject));
    // true
    console.log(sampleDeleteObject);
    // { three: 3 }
})();
