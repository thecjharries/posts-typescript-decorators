import "reflect-metadata";

import { PARAMETER_DESCRIPTION_KEY, PARAMETER_METADATA_KEY } from "./constants";
import { SignatureMetadataType } from "./interfaces";

export function updateParameterDescriptions(
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number,
    description: string,
) {
    // Pull the array of parameter names
    const parameterDescriptions = (
        Reflect.getOwnMetadata(
            PARAMETER_DESCRIPTION_KEY,
            target,
            propertyKey,
        )
        ||
        []
    );
    // Add the current parameter name
    parameterDescriptions[parameterIndex] = description;
    // Update the parameter descriptions
    Reflect.defineMetadata(
        PARAMETER_DESCRIPTION_KEY,
        parameterDescriptions,
        target,
        propertyKey,
    );
}

export function Description(description: string) {
    return function(
        target: any,
        propertyKey: string | symbol,
        parameterIndex: number,
    ) {
        // Update the parameter description metadata
        updateParameterDescriptions(
            target,
            propertyKey,
            parameterIndex,
            description,
        );
        // Pull the signature's metadata
        const parameterMetadata: SignatureMetadataType = (
            Reflect.getOwnMetadata(
                PARAMETER_METADATA_KEY,
                target,
                propertyKey,
            )
            ||
            []
        );
        // Either
        // * update an entry that has a name, or
        // * create a new entry with an empty name
        if (
            parameterMetadata[parameterIndex]
            &&
            parameterMetadata[parameterIndex].name
        ) {
            parameterMetadata[parameterIndex].description = description;
        } else {
            parameterMetadata[parameterIndex] = {
                description,
                name: "",
            };
        }
        // Update the signature metadata
        Reflect.defineMetadata(
            PARAMETER_METADATA_KEY,
            parameterMetadata,
            target,
            propertyKey,
        );
    };
}
