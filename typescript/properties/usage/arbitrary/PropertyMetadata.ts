import "reflect-metadata";

import { PROPERTY_METADATA_KEY } from "./constants";
import { ISinglePropertyMetadata } from "./interfaces";

export function PropertyMetadata(updates: ISinglePropertyMetadata) {
    return (target: any, propertyKey: string | symbol) => {
        // Pull the existing metadata or create an empty object
        const allMetadata = (
            Reflect.getMetadata(PROPERTY_METADATA_KEY, target)
            ||
            {}
        );
        // Ensure allMetadata has propertyKey
        allMetadata[propertyKey] = (
            allMetadata[propertyKey]
            ||
            {}
        );
        // Update the metadata with anything from updates
        // tslint:disable-next-line:forin
        for (const key of Reflect.ownKeys(updates)) {
            allMetadata[propertyKey][key] = updates[key];
        }
        // Update the metadata
        Reflect.defineMetadata(
            PROPERTY_METADATA_KEY,
            allMetadata,
            target,
        );
    }
}
