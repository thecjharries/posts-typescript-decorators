import "reflect-metadata";

import { PARAMETER_METADATA_KEY } from "./constants";
import { SignatureMetadataType } from "./interfaces";

import { updateParameterDescriptions } from "./Description";
import { updateParameterNames } from "./Name";

export function ParameterMetadata(name: string, description: string) {
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
                propertyKey
            )
            ||
            []
        );
        // Define or overwrite the metadata for this parameter
        parameterMetadata[parameterIndex] = {
            description,
            name,
        };
        // Update the signature metadata
        Reflect.defineMetadata(
            PARAMETER_METADATA_KEY,
            parameterMetadata,
            target,
            propertyKey
        );
    }
}
