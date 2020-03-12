# React의 Class Copmonent 에 관하여

## 프레임워크 vs 라이브러리
- 프레임워크 : 필요한 기능이 만들어져 있다. 단 한가지 프레임워크를 사용. 사용하지 않을 기능도 존재, 그래서 다소 무겁다.
- 라이브러리 : 필요한 곳에 가져다 써도 됨. 다른 라이브러리와 충돌 가능성 적음.

핵심 
\*\*virtual DOM\*\*
- 실제 DOM을 처리하는건 관리하기 힘들다. => 너무 많은 수정을 요구시 복잡해진다. 
- 실제 DOM과 가상 DOM을 비교하여 실제 DOM과 다른 부분을 수정하고 리랜더링한다.
실제 DOM은 전체를 그리는게 빠르고 가상 DOM은 부분적인 변화를 찾기 유용

## React의 장점
- virutal DOM
- 배우기 간단하다. 
- 뛰어난 Garbage Collection, 메모리 관리, 성능
- 서버 & 클라이언트 사이드 렌더링 둘 다 지원
*서버 사이드 렌더링 => 초기 구동 딜레이 & SEO(검색엔진최적화)
- 매우 간편한 UI 수정 및 재사용
- 페이스북이 밀어준다! 그래서 업데이트를 자주 해준다.
- 다른 프레임 워크나 라이브러리와 혼용 가능

## React의 단점
- VIEW ONLY
- IE8 이하 지원 X 

## props와 state
- props는 상위 컴포넌트가 하위 컴포넌트에게 주는 값. 하위 컴포넌트에선 props로 받아온 값을 수정 할 수 없다.
- state는 컴포넌트 내부에 정의되며 수정 가능하다.

### props
: 하위 컴포넌트에서 받은 props 값은 ```this.props.value```로 받아서 사용한다. 
: 상위 컴포넌트에선 ```<MyComponent value="값">``` 으로 보내준다. 

### defaultProps 
가끔은 실수로 props를 빼먹을 때가 있다. 이때 발생하는 오류를 막고자 하위 컴포넌트에 defaultProps를 설정해준다.

``` js
static defaultProps = {
    value: '기본값'
}
```

### state
- 동적인 데이터를 다룰땐 state를 사용한다. 
- state의 값을 바꿀땐 직접적으로 바꾸지 않고 ```this.setState(바꿀 값)```를 사용하여 바꾼다. 

## LifeCycle
### 컴포넌트 초기 생성 
컴포넌트가 브라우저에 나타나기 전, 후에 호출 되는 API

- constructor : 컴포넌트 생성자 함수이다. 컴포넌트가 새로 만들어질 때마다 이 함수가 호출된다. 

- componentWillMount : 컴포넌트가 화면에 나가기 직전에 호출되는 API였으나 이제는 사용하지 않는다. constructor와 componentDidMount에서 충분히 처리 가능

- componentDidMount : 컴포넌트가 화면에 나타나게 됐을 때 호출되는 API
    - 외부 라이브러리 연동
    - 컴포넌트에서 필요한 데이터 요청
    - DOM에 관련된 작업

### 컴포넌트 업데이트
컴포넌트가 업데이트는 props의 변화, state의 변화에 따라 결정된다. 

- componentWillReceiveProps : 컴포넌트가 새로운 props를 받게됐을 때 호출된다. 역시나 현재는 사용되지 않는다. 대신 getDerivedStateFromProps()로 대체 될 수 있다. 

- static getDerivedStateFromProps() : v16.3 이후에 만들어진 라이프사이클 API이다. props로 받아온 값을 state로 동기화 하는 작업을 해줘야 하는 경우에 사용된다. 

```js
static getDerivedStateFromProps(nextProps, prevState) {
    // 여기서는 setState를 하는게 아니라 
    // 특정 props가 바뀔 때 설정하고 설정하고 싶은 state값을 리턴하는 형태로 사용된다. 
    /*
    if(nextProps.value !== prevState.value){
        return {value : nextProps.value};
    }
    return null; //null을 리턴하면 따로 업데이트 할 것은 없다는 의미
    */
}
```

- shouldComponentUpdate : 최적화하는 작업에서 매우 유용하게 사용된다. 쓸데없이 리렌더링 되는걸 방지한다. 

```js
shouldComponentUpdate(nextProps, nextState){
    // return false 하면 업데이트를 안함
    // return this.props.checked !== nextProps.checked
    return true;
}
```
