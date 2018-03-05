import "reflect-metadata";

import { RANGE_KEY } from "./constants";
import { SampleClass } from "./SampleClass";

// Initialize
const sampleDemo = new SampleClass();
// Working value
sampleDemo.updatePercentage(10);
// Bad value
try {
    sampleDemo.updatePercentage(200);
} catch (error) {
    // do nothing
}
