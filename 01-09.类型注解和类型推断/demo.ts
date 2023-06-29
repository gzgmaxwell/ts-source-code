// TS 开发准则：只要是变量、或者对象属性，都应该有一个明确的类型
// 类型注解: 人工的告诉 TS，变量或者对象的明确属性类型
const userName: string = '123'
// 类型推断
const userAge = 18;
// 如果类型推断能够自动推断出来类型，就没必要去手写类型注解
let userNick = 'dell';
userNick.toLocaleUpperCase();

function getTotal(paramOne: number, paramTwo: number) {
  return paramOne + paramTwo;
}

getTotal(1, 2);

// 如果类型推断推断不出来，或者推断的不准确，再去手写类型注解
const userInfo = {
  name: 'dell',
  age: 18
}

userInfo.name = 'lee'