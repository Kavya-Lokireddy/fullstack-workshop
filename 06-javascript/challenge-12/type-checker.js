const typeOf = (value) =>{

    //Handled null
    if(value === null){
        return "null";
    }
    //handle NaN
    if(Number.isNaN(value)){
        return "nan";
    }

    //Handle primitives & functions
    const primitiveType = typeof value;
    if(primitiveType!=='object'){
        return `${primitiveType}`;
    }

    //handle built-in objects
    if(Array.isArray(value)) return "array";
    if(value instanceof Date) return "date";
    if(value instanceof Map) return "map";
    if(value instanceof Set) return "set";
    if(value instanceof RegExp) return "regexp";
    if(value instanceof Error) return "error";
    if(value instanceof Promise) return "promise";

    //default object
    return "object";
};

console.log(typeOf(null));
console.log(typeof(undefined));

console.log(typeOf(42));
console.log(typeOf(NaN));
console.log(typeOf('hello'));
console.log(typeOf(true));
console.log(typeOf(Symbol()));

console.log(typeOf([]));

console.log(typeOf({}));

console.log(typeOf(()=>{}));

console.log(typeOf(new Date()));
console.log(typeOf(new Map()));
console.log(typeOf(new Set()));
console.log(typeOf(/regex/));
console.log(typeOf(new Error()));
console.log(typeOf(Promise.resolve()));