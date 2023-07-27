export function replaceItemAtIndex(arr : Array<any>, index: number, newValue: Object) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
  
export function removeItemAtIndex(arr : Array<any>, index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}