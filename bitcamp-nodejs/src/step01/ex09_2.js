// 주제 : module을 실행하는 과정 알아보기

// require() 를 여러번 호출해도 각 module은 한번만 실행된다.

require('./ex09_m');
require('./ex09_m'); // 두번째 이후 require()를 호출할 때는 같은 객체를 리턴한다.
require('./ex09_m');

// 3번 콘솔 찍힐거같지?  한번만 찍힘

// 즉, 다른 객체를 만들고 싶다면 require()로 함수를 리턴한 뒤,
// 각 객체에서 함수를 호출하여 객체를 리턴받으면 된다.(클로저 사용)