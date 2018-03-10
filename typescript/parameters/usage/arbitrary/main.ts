import "reflect-metadata";

import {
    PARAMETER_DESCRIPTION_KEY,
    PARAMETER_METADATA_KEY,
    PARAMETER_NAME_KEY,
} from "./constants";

import { Description } from "./Description";
import { Name } from "./Name";
import { ParameterMetadata } from "./ParameterMetadata";

class ArbitraryMetadata {
    public nameOnly(
        @Name("propertyWithNameOnly")
        propertyWithNameOnly: any,
    ) {
        // do nothing
    }

    public descriptionOnly(
        @Description("decorated with Description")
        propertyWithDescriptionOnly: any,
    ) {
        // do nothing
    }

    public usingParameterMetadata(
        @ParameterMetadata(
            "decoratedWithParameterMetadata",
            "decorated with ParameterMetadata",
        )
        decoratedWithParameterMetadata: any,
    ) {
        // do nothing
    }

    public chainingDecorators(
        @Name("decoratedViaChain")
        @Description("decorated with Name and Description")
        decoratedViaChain: any,
    ) {
        // do nothing
    }
}

// These are not defined on the class
// names
console.log(
    "ArbitraryMetadata names:",
    Reflect.getMetadata(
        PARAMETER_NAME_KEY,
        ArbitraryMetadata,
    ),
);
// descriptions
console.log(
    "ArbitraryMetadata descriptions:",
    Reflect.getMetadata(
        PARAMETER_DESCRIPTION_KEY,
        ArbitraryMetadata,
    ),
);
// signature metadata
console.log(
    "metadata from ArbitraryMetadata signatures:",
    Reflect.getMetadata(
        PARAMETER_METADATA_KEY,
        ArbitraryMetadata,
    ),
);
// They're defined on an instance
const demoArbitraryMetadata = new ArbitraryMetadata();

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
    console.log("---");
    // Log the parameter names
    console.log(
        `${method} names:`,
        Reflect.getMetadata(
            PARAMETER_NAME_KEY,
            demoArbitraryMetadata,
            method,
        ),
    );
    // Log the parameter descriptions
    console.log(
        `${method} descriptions:`,
        Reflect.getMetadata(
            PARAMETER_DESCRIPTION_KEY,
            demoArbitraryMetadata,
            method,
        ),
    );
    // Log the full signature metadata
    console.log(
        `${method} signature metadata:`,
        Reflect.getMetadata(
            PARAMETER_METADATA_KEY,
            demoArbitraryMetadata,
            method,
        ),
    );
}

