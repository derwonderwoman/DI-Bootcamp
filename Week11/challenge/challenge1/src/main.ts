import './style.css'

const sum = (a: number | string | boolean): string | number | boolean=>{
  if (typeof a === "string") {
      return (a.toUpperCase());
  }
  else if (typeof a === "number") {
    return (a * a);
  }
  else if (typeof a === "boolean")  {
    return (!a);
  }
}

console.log(sum("gss"));

