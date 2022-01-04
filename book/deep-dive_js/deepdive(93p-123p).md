#### deepdive (93p-123p)

### [8장 제어문]

#### 제어문 Control Flow Statement

- 조건에 따라 코드블록을 실행(조건문)하거나 반복실행(반복문)할 때 사용
- 제어문을 사용하면 코드의 실행 흐름을 인위적으로 제어할 수 있음
- 단점: 가독성을 해침, 가독성이 좋지 않은 코드는 오류를 발생시키는 원인
- 제어문 대신 forEach, map, filter, reduce 사용하여 복잡성을 해결하려고 노력

##### 블록문 block statement/compound statement

- 0개이상의 문을 중괄호로 묶은것, 코드블록 or 블록
- 하나의 실행 단위로 취급
- 단독으로 사용가능하나, 제어문이나 함수를 정의할 때 사용하는 것이 일반적
- 자체종결성을 갖기때문에 세미콜론 붙히지 않음

##### 조건문 conditional statement

- 조건식(conditional expression)의 평가 결과에 따라 코드블록의 실행을 결정
- boolean값으로 평가될 수 있는 표현식
- if...else : 논리적 참,거짓으로 실행할 코드블록을 결정
- switch문 : 다양한 상황(case)에 따라 실행할 코드블록 결정할때 사용

###### if...else문

- 논리적으로 참 or 거짓에 따라 실행할 코드블록을 결정
- 삼항연산자로 바꿔 쓸 수 있음
- 삼항조건연산자 : 조건에 따라 단순히 값을 결정하여 변수에 할당하는 경우 사용, 표현식으로 값처럼 사용 할 수 있기ㅣ때문에 변수에 할당 가능.
- if...else : 실행해야할 내용이 복잡하여 여러줄의 문이 필요한 경우 , 변수 할당 불가능

###### switch문

- 주어진 표현식을 평가, 그 값과 일치하는 표현식을 갖는 case문으로 실행흐름을 옮김
- case 문은 상황을 의미하는 표현식을 지정하고 콜론으로 마친 후 실행할 문들을 위치
- switch문의 표현식과 일치하는 case문이 없다면 실행순서는 default문으로 이동
- 표현식은 boolean보다는 string, number인 경우가 많음

        switch(표현식){
            case 표현식1:
                switch 문의 표현식과 표현식1이 일치하면 실행될 문;
                break;
            case 표현식2:
                switch 문의 표현식과 표현식2이 일치하면 실행될 문;
                break;
            case 표현식3:
                switch 문의 표현식과 표현식3이 일치하면 실행될 문;
                break;
            default:
                switch문의 표현식과 일치하는 case문이 없을때 실행된 문;
        }

- fall through : break를 쓰지않아 switch문이 끝날때까지 모든 case문과 default문을 실행하는 것
- default 문에는 break문을 생략하는것이 일반적

##### 반복문 (loop statement)

- 조건식의 평가 결과가 참인 경우 코드블록을 실행
- 조건식이 거짓일때까지 반복
- for문, while문, do...while문
- for문은 반복 횟수가 명확할 때 사용 while은 반복 횟수가 불명확할 때 사용
- do...while문 : 코드블록을 먼저 실행하고 조건식을 평가, 코드블록이 무조건 한 번 이상 실행

###### break문

- 반복문을 더이상 진행하지 않아도 될 때 불필요한 반복을 회피할 수 있음
- 레이블 문, 반복문, switch문의 코드블록 탈출
- 레이블 문(label statement):식별자(label)이 붙은 문 , 프로그램의 실행 순서를 제어하는 데 사용(switch문 case문, default문 )
- 레이블 문을 탈출하려면 break 문에 레이블 식별자를 지정한다.
- 중첩된 for문 탈출시 유용
- 레이블 문 break문 사용시 단점: 프로그램 흐름이 복잡해져서 가독성이 떨어지고 오류 발생 가능성이 높아짐

        outer : for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
        if(i+j===3) break outer;
        console.log(`inner [${i},${j}]`);
        }
        }
        console.log('Done!');

###### continue문

- 반복문의 코드블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 이동, 탈출은 하지 않음

### [9장 타입변화과 단축 평가]

#### 타입변환

- 의도적 값의 타입변환: 명시적 타입변환(explicit coercion), 타입캐스팅(type casting)
- 암묵적 자동적 타입변환: 암묵적 타입변환(implicit coercion), 타입강제변환(type coercion)
- 기존 원시값을 직접변경하는 것이 아닌 기존 원시값을 사용해 다른 타입의 새로운 원시 값을 생성

##### 암묵적타입변환

-string,number,boolean과 같은 원시 타입 중 하나로 타입을 자동 변환

1. 문자열 타입변환
2. 숫자 타입변환

- 0 : 문자열 (''),빈배열([]),null,false
- 1 : true
- NaN : 객채와 빈배열이 아닌 배열,undefined

3. 불리언 타입변환 : true (Truthy), false(Falsy)

##### 명시적 타입변환

- 표준 빌트인 생성자 함수(string, number, boolean)를 new 연산자 없이 호출하는 방법
- 빌트인 메서드를 사용하는 방법
- 암묵적 타입변환을 이용하는 방법

###### 문자열 타입 변환

1. string 생성자 함수를 new연산자 없이 호출하는 방법 : String(NaN)
2. Object.prototype.toString 메서드를 이용하는 방법 : (1).toStirng(); / (true).toString();
3. 문자열 연결 연산자를 이용하는 방법 : 1+''; / true +''

###### 숫자 타입 변환

1. Number 생성자 함수를 new연산자 없이 호출하는 방법 : Number('10.53')
2. parseInt, parseFloat 함수를 이용하는 방법 ( 문자열만 숫자 타입으로 변환가능 ) : parseInt('-1'), parseFloat('10.53')
3. +단항 산술 연산자를 이용하는 방법 : +'0';
4. _산술 연산자를 이용하는 방법 : '-1' _ 1

###### boolean 타입 변환

1. Boolean 생성자 함수를 new연산자 없이 호출하는 방법 Boolean('false') //true
2. ! 부정 논리 연산자를 두 번 사용하는 방법 !!null //false

#### 단축평가

##### 논리연산자를 사용한 단축평가

- 논리곱(&&) , 논리합(||)연산자
- 논리연산의 결과를 결정하는 피연사자를 타입 변환하지 않고 그대로 반환
- 표현식을 평가하는 도중에 평가결과가 확정된 경우 나머지 평가 과정을 생략

[단축평가를 사용하여 에러방지]

1. 객체를 가르키기를 기대하는 변수가 null or undefined 인지 아닌지 확인하고 프로퍼티를 참조할 때
2. 함수 매개변수의 기본값을 설정할 때

##### 옵셔널 체이닝 연산자

- 연산자 ?.는 좌항의 피연산자가 null 또는 undefined인경우 undefined 그렇지 않으면 우항의 프로퍼티를 참조함
- 논리연산자는 좌항 피연산자가 Falsy좌항 피연산자를 그대로 반환 , 옵셔널 체이닝 연산자는 Falsy 값이라도 null 또는 undefined가 아니면 우항의 참조를 이어감

##### null 병합 연산자

- 연산자 ??은 좌항의 피연산가 null또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
- 변수의 기본값 설정할때 유용
- Falsy 값이라도 null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환
