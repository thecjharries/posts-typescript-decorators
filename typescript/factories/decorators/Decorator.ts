export function Decorator(type: string) {
    return function(...args: any[]) {
        console.log(type, args);
    }
}
