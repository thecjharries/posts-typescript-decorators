import "reflect-metadata";

import {
    PARAMETER_DESCRIPTION_KEY,
    PARAMETER_METADATA_KEY,
    PARAMETER_NAME_KEY,
} from "./constants";

import { Description } from "./Description";
import { Name } from "./Name";
import { ParameterMetadata } from "./ParameterMetadata";

class ArbitraryMetadataDemoClass {
    public nameOnly(
        @Name("propertyWithNameOnly")
        propertyWithNameOnly: any,
    ) { }

    public descriptionOnly(
        @Description("decorated with Description")
        propertyWithDescriptionOnly: any,
    ) { }

    public usingParameterMetadata(
        @ParameterMetadata(
            "decoratedWithParameterMetadata",
            "decorated with ParameterMetadata",
        )
        decoratedWithParameterMetadata: any,
    ) { }

    public chainingDecorators(
        @Name("decoratedViaChain")
        @Description("decorated with Name and Description")
        decoratedViaChain: any,
    ) { }
}

// These are not defined on the class
// names
console.log(
    'ArbitraryMetadataDemoClass names:',
    Reflect.getMetadata(
        PARAMETER_NAME_KEY,
        ArbitraryMetadataDemoClass,
        )
);
// descriptions
console.log(
    'ArbitraryMetadataDemoClass descriptions:',
    Reflect.getMetadata(
        PARAMETER_DESCRIPTION_KEY,
        ArbitraryMetadataDemoClass,
    )
);
// signature metadata
console.log(
    'metadata from ArbitraryMetadataDemoClass signatures:',
    Reflect.getMetadata(
        PARAMETER_METADATA_KEY,
        ArbitraryMetadataDemoClass,
    )
);
// They're defined on an instance
const arbitraryMetadataDemo = new ArbitraryMetadataDemoClass();

// This could be created via decorators
// Since it requires more than parameter decorators, it's hardcoded
const METHODS = [
    "nameOnly",
    "descriptionOnly",
    "usingParameterMetadata",
    "chainingDecorators",
];

// Loop over each method
for (const method of METHODS) {
    // Line break to make things easier to read
    console.log('---');
    // Log the parameter names
    console.log(
        `${method} names:`,
        Reflect.getMetadata(
            PARAMETER_NAME_KEY,
            arbitraryMetadataDemo,
            method
        )
    );
    // Log the parameter descriptions
    console.log(
        `${method} descriptions:`,
        Reflect.getMetadata(
            PARAMETER_DESCRIPTION_KEY,
            arbitraryMetadataDemo,
            method
        )
    );
    // Log the full signature metadata
    console.log(
        `${method} signature metadata:`,
        Reflect.getMetadata(
            PARAMETER_METADATA_KEY,
            arbitraryMetadataDemo,
            method
        )
    );
}

