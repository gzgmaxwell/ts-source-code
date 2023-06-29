// typeof 类型收窄
function uppercase(content: string | number) {
  if(typeof content === 'string') {
    return content.toUpperCase();
  }
  return content;
}
// 真值收窄
function getString(content?: string) {
  if(content) {
    return content.toUpperCase();
  }
}
// 相等收窄
function example(x: string | number, y: string| boolean) {
  if(x === y) {
    return x.toUpperCase();
  }
}

// 对象类型解构的代码怎么写
function getOjbectValue({a, b}: {a: string, b: string}){
  return a + b;
}
getOjbectValue({a: '1', b: '2'});

// 变量类型以定义变量时的类型为准
let userName = '123';
userName = '123';
