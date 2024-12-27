function mapKeys<T>(obj: Record<string, T>, keyMapper: (key: string) => string): Record<string, T> {
    return Object.keys(obj).reduce((result, key) => {
        let newKey = keyMapper(key);
        result[newKey] = obj[key];
        return result;
    }, {} as Record<string, T>);
}


const os= { name: "Thanya", age: 21};

const out = mapKeys(os, key => key.toUpperCase());

console.log(out);

