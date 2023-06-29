// 有属性的函数类型定义方法
interface FunctionWithAttributes {
  attr: string;
  (str: string): void;
}

const test: FunctionWithAttributes = (str: string) => {
  console.log(str);
}
test.attr = 'attributes';

// 构造函数的类型如何定义
interface ClassWithConstructor {
  new (str: string): void;
}

function testOne(outerClass: ClassWithConstructor) {
 const instance = new outerClass('new')
}

class TestOne {
  name: string;
  constructor(str: string) {
    this.name = str;
  }
}

testOne(TestOne);

// 如何写 Date 的类型
interface DateTpye {
  new (): Date;
  (dateString: string): string;
}

// 函数和泛型
function getArrayFirstItem<Type>(arr: Type[]): Type {
  return arr[0];
}

const numberArr = [1,2,3];
const result = getArrayFirstItem(numberArr);

const stringArr = ['1','2','3'];
const resultOne = getArrayFirstItem(stringArr);

// 函数重载
function getString(str: string): string;
function getString(str: string, str1: string): number;
function getString(str: string, str1?: string) {
  if(typeof str1 === 'string') {
    return (str + str1).length;
  }
  return str;
}

