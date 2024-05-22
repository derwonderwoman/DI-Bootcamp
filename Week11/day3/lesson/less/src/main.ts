interface EmployeeInterface {
  // [key: string]: string | number;
  name: string;
  age: number;
  role: string;
}

let employee1: EmployeeInterface = {
  name: "John",
  age: 30,
  role: "Developer",
}

console.log(employee1["name"]);
console.log(employee1.name);

// employee1["email"] = "fff@mail.com"
let prop: string = "name";
console.log(employee1[prop as keyof EmployeeInterface]);

for (let key in employee1) {
  console.log(key,employee1[key as keyof EmployeeInterface]);
  
}

const logEmployee = (employee: EmployeeInterface, key: keyof EmployeeInterface) => {
  console.log(key, employee[key as keyof EmployeeInterface]);
}

logEmployee(employee1, "role")

type names = "name" | "age" | "role";
type NewEmployee = Record<names, string | number>;

let employee2

// Generics

const srtEcho = (arg: string): string => arg

const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean =>{
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
}

console.log(isObj({name: "John"}));
console.log(isObj(["name", "John"]));

interface Boolcheck<T> {
  value: T;
  is: boolean;
}

const checkBool = <T>(arg: T): Boolcheck<T> =>{
  return {value: arg, is: !!arg};
}

interface HasId {
  id: number;
}

const hasId = <T extends HasId>(arg: T): number => {
  return arg.id;
}

// const getUserInfo = <T extends HasId, key extends keyof T>(users: T[], key: key): T[K][] {}

class StateObject<T> {
  private _state: T;
  constructor(initialState: T) {
    this._state = initialState;
  }

  get state(): T {
    return this._state;
  }

  set  state(newState: T) {
    this._state = newState;
  }
}

const username  = new StateObject<string>("John");
username.state = "Doe";
console.log(username.state);


type Admin = {
  name: string;
  role: string;
}

type User = {
  email:string;
}

type AdminUser = Admin & User;

interface Post {
  title: string;
  content: string;
  date: Date;
}

const post: Post = {
  title: "Post title",
  content: "Post content",
  date: new Date()
}

const updatePost = (post: Post, update: Partial<Post>): Post => {
  return {...post, ...update};
}

console.log(updatePost(post, {title: "New title"}));

const readOnlyPost: Readonly<Post> = {...post, title: "John"};

// readOnlyPost["content"] = "new content"

type postTitle = Pick<Post, "title" | "content">

type postAuthor = Omit<Post, "title" | "content">

type Grades = "A" | "B" | "C" | "D";

type Passed = Exclude<Grades, "D" | "F">;

type Failed = Extract<Grades, "D" | "F">;

// NonNullable

type Nullable = string | null | undefined;
type NonNullableString = NonNullable<Nullable>;

const createUser = (name: string, age:number) => {
  return{name, age};
}

type UserReturnType = ReturnType<typeof createUser>;

const usernew: UserReturnType = createUser("John", 30);

type UserParams = Parameters<typeof createUser>;

const userParams: UserParams = ["John", 30];

const newnewuser = createUser(...userParams);

