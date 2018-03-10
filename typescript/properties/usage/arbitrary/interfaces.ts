export interface ISinglePropertyMetadata {
    name?: string;
    description?: string;
}

export interface IAllPropertyMetadata {
    [key: string | symbol]: ISinglePropertyMetadata;
}
