(() => {
    "use strict";
    const sampleDeleteObject = {
        one: 1,
        two: 2,
        three: 3,
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
