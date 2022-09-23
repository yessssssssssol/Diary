console.log(area1());
// console.log(area2());

//함수 선언식 => 호이스팅 가능
function area1() {
  return '안녕하세요';
}

//함수 표현식 => 호이스팅 불가능
const area2 = function () {
  return 'hi';
};
//화살표 함수 => 호이스팅 불가능
const area3 = () => {
  return 'hello';
};
