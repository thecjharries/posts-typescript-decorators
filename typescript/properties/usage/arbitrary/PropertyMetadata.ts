import "reflect-metadata";

import { PROPERTY_METADATA_KEY } from "./constants";
import { ISinglePropertyMetadata } from "./interfaces";

export function PropertyMetadata(updates: ISinglePropertyMetadata) {
    return (target: any, propertyKey: string | symbol) => {
        const allMetadata = (
            Reflect.getMetadata(PROPERTY_METADATA_KEY, target)
            ||
            {}
        );
        allMetadata[propertyKey] = (
            allMetadata[propertyKey]
            ||
            {}
        );
        // tslint:disable-next-line:forin
        for (const key of Reflect.ownKeys(updates)) {
            allMetadata[propertyKey][key] = updates[key];
        }
        Reflect.defineMetadata(
            PROPERTY_METADATA_KEY,
            allMetadata,
            target,
        );
    }
}
