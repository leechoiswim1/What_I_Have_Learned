//function return 값에 붙일수있는 never type
//1)return 값이 없어야함. 2) 함수실행이 끝나지 않아야함.(=endPoint가 없는 함수)
//never는 void로 대체할수있다. 그래서 거의쓰지않지만 코드에 문제가 생기면 자동으로 나타남.
function neverFunc(): never {
  throw new Error();
}
