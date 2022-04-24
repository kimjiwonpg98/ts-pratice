const throwError = (): never => {
  while (true) {
    break;
  }
  throw new Error("Invalid");
};
// never는 반환값이 없는 경우 에러처리나 무한 루프일때

function tsFetchNum(id: string): Promise<string> {
  return new Promise((resolve, reject) => {
    resolve(id);
  });
}

//Optional parameter

function printName(firstName: string = "gg", lastName: string) {
  console.log(firstName);
}

printName(undefined, "gggg");

//rest parameter

function totalNumbers(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}

console.log(totalNumbers(1, 2, 3, 4, 4, 5, 6));

//Tuple

let student: [string, number];
//권장 x
