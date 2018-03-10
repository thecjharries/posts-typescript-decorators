import "reflect-metadata";

import { RANGE_KEY } from "./constants";
import { Sample } from "./Sample";

// Initialize
const demoSample = new Sample();
// Working value
demoSample.updatePercentage(10);
// Bad value
try {
    demoSample.updatePercentage(200);
} catch (error) {
    // do nothing
}
