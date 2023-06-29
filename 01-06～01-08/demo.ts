// 基础类型 string, number, boolean
const teacherName: string = 'Dell Lee';
const teacherAge: number = 28.0;
const isMale: boolean = true;
// 数组类型
const numberArr: number[] = [1, 2, 3];
const stringArr: string[] = ['a', 'b', 'c'];
const booleanArr: Array<boolean> = [true, false]; // 范型
// 对象类型
const user: {name: string, age: number} = { name: 'dell', age: 18};
const userOne: {name: string, age?: number} = {name: 'dell'};
// 联合类型 Union Type
function union(id: string|number) {
  if(typeof id === 'string') { // 类型收窄 Narrowing
    console.log(id.toUpperCase());
  }else {
    console.log(id);
  }
}
// 类型别名
type User = {name: string, age: number};
const userTwo: User = { name: 'dell', age: 18};
const userThree: User = { name: 'dell', age: 18};
// any
function showMessage(message: any) {
  console.log(message);
}
// 函数类型
function abc(message: string): number {
  return 123;
}
const def: (age: number) => number = (age: number) => { return 28 }
// 接口类型 Interface
interface Student {
  age: number;
  sex?: string;
}
interface Student {
  name: string;
}
// interface OldStudent extends Student {
//   name: string;
// }
const student: Student = { age: 18, sex: 'male', name: 'dell'}
// const oldStudent: OldStudent = { age: 18, sex: 'male', name: 'dell'};
// 交叉类型
type Employee = User & {salary: number};
const employee:Employee  = {name: 'dell', age: 18, salary: 1}
// 断言 Assersion
const dom: undefined = document.getElementById('#root') as undefined;
const dom1: undefined = <undefined>document.getElementById('#root');
const testString: string = 123 as any as string;
// 字面量类型
function getPosition(position: 'left' | 'right'): string {
  return position;
}
getPosition('right');
// 字面量类型习题
function request(url: string, method: 'GET' | 'POST'): string {
  return 'sending requst';
}
const params: {url: string, method: string} = { url: 'immoc.com', method: 'POST'};
request(params.url, params.method as 'GET');
// null, undefined
const testNull: null = null;
const testUndefined: undefined = undefined;
function checkNull(abc: string | null) {
  if(typeof abc === 'string') {
    console.log(abc.toUpperCase());
  }
}
// void
function getNumber(): void {
  return;
}