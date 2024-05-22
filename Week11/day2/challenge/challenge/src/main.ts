function validateUnionType(value: any, allowedTypes: string[]): boolean {
  return allowedTypes.includes(typeof value);
}
const obj1: object = { key: "value" }

const array:string[] = ["string", "number", "boolean"];
console.log(validateUnionType("hello", array));
console.log(validateUnionType(obj1, array));
console.log(validateUnionType(23, array));
