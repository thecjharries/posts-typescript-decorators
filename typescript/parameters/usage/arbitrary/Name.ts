import "reflect-metadata";

import { PARAMETER_METADATA_KEY, PARAMETER_NAME_KEY } from "./constants";
import { SignatureMetadataType } from "./interfaces";

export function updateParameterNames(
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number,
    name: string
) {
    // Pull the array of parameter names
    const parameterNames = (
        Reflect.getOwnMetadata(
            PARAMETER_NAME_KEY,
            target,
            propertyKey
        )
        ||
        []
    );
    // Add the current parameter name
    parameterNames[parameterIndex] = name;
    // Update the parameter names
    Reflect.defineMetadata(
        PARAMETER_NAME_KEY,
        parameterNames,
        target,
        propertyKey
    );
}

export function Name(name: string) {
    return function(
        target: any,
        propertyKey: string | symbol,
        parameterIndex: number
    ) {
        // Update the parameter name metadata
        updateParameterNames(
            target,
            propertyKey,
            parameterIndex,
            name,
        );
        // Pull the signature's metadata
        const parameterMetadata: SignatureMetadataType = (
            Reflect.getOwnMetadata(
                PARAMETER_METADATA_KEY,
                target,
                propertyKey
            )
            ||
            []
        );
        // Either
        // * update an entry that has a description, or
        // * create a new entry with an empty description
        if (
            parameterMetadata[parameterIndex]
            &&
            parameterMetadata[parameterIndex].description
        ) {
            parameterMetadata[parameterIndex].name = name;
        } else {
            parameterMetadata[parameterIndex] = {
                description: "",
                name,
            };
        }
        // Update the signature metadata
        Reflect.defineMetadata(
            PARAMETER_METADATA_KEY,
            parameterMetadata,
            target,
            propertyKey
        );
    }
}
