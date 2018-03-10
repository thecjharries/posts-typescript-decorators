import { MinimumValue } from "./MinimumValue";

export class HasDecoratedProperty {
    @MinimumValue(0)
    public currentValue: number;
}
