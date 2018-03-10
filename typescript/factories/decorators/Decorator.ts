export function Decorator(type: string) {
    return (...args: any[]) => {
        console.log(type, args);
    };
}
