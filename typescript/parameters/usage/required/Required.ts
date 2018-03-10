import "reflect-metadata";

import { REQUIRED_KEY } from "./constants";

export function Required(
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number,
) {
    // Pull existing parameters for this method or create an empty array
    const requiredParameters = (
        Reflect.getOwnMetadata(
            REQUIRED_KEY,
            target,
            propertyKey,
        )
        ||
        []
    );
    // Add this parameter
    requiredParameters.push(parameterIndex);
    // Ensure regular order
    requiredParameters.sort();
    // Update the required parameters for this method
    Reflect.defineMetadata(
        REQUIRED_KEY,
        requiredParameters,
        target,
        propertyKey,
    );
}
