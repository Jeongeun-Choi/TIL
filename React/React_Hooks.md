# React Hooks

## 상태 'State'
Props는 상위 컴포넌트가 하위 컴포넌트에게 데이터를 전달하는 것이라면, State는 컴포넌트 자체적으로 값을 가지고 있는 데이터를 말한다.    
직접적으로 state 값을 변경하는 것 보다 React 자체적으로 값을 변경한다. 

## React Hooks
React v 16.8 이후부터 함수형 컴포넌트에서 state를 설정 할 수 있게 해주는 개념 및 React가 지원하는 함수 중 use로 시작하는 것을 통칭하는 명칭이다.   
- useState
- useEffect
- useRef
- useMemo
- useReducer

### useState

```js
import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}
```

useState를 불러와서 컴포넌트 안에 사용한다.   
   
useState 함수의 return 값은 배열로 나오며 1번째는 useState에 전달할 값을 적고, 2번째는 state 값을 변경할 함수를 적는다.   
   
하나의 컴포넌트에선 여러번 useState를 사용할 수 있다...!   

간단한 함수일 경우 속성 ```onClick={() => setCount(count - 1)}``` 에다가 적어도 되지만
함수가 복잡해질 경우 가독성이 떨어지므로 따로 함수를 작성하여 사용하는 것이 좋다.

### useEffect
useEffect는 해당 컴포넌트의 연산이 끝난 이후 함수를 실행한다.   
즉, 화면에 그리는 작업이 끝난 이후 useEffect 함수가 발동한다.   

효율적으로 useEffect를 사용하기 위해선 이전 state와 현재 state 값을 비교하여 다를 경우에만 useEffect를 실행되게 한다.

```
useEffect(() => {
    document.title = nickname;
}, [nickname])
```
이 경우엔 nickname이 바뀔 경우에만 useEffect가 실행된다.

class형 컴포넌트에선 이렇게 사용한다. 
```
componentDidUpdate(prevProps, prevState){
    if (prevProp.value !== this.props.value){
        doSomething();
    }
}
```

```
useEffect(() => {
    document.title = nickname;
}, [])
```
이 경우엔 처음 한번만 실행되고 그 이후엔 실행되지 않는다.

### 비동기적인 State 변경
```js
...
const [count, setCount] = useState(0);

const decreaseCount = (() => {
    window.setTimeout(()=>setCount(previousCount => previousCount - 1), 3000);
})
```
라 적으면 함수로 넘겨줄 때는 '직전'의 State를 입력으로 받고 다음 State를 return 하는 형태이다.

## Custom Hooks

```js
import React, {useState} from 'react';

const useUser = (initialState) => {
    const [nickname, setNickname] = useState(initialState);

    const updateNickname = e => {
        const nickname = e.target.value;

        setNickname(nickname)
    }
    return [nickname, updateNickname]
}

const User = () => {
    const [nickname, setNickname] = useUser('')

    return (
        <div>
            <label>{nickname}</label>
            <input value = {nickname} onChange={setNickname}/>
        </div>
    )
}
```

input의 값을 받는 내용을 별도의 함수로 분리하여 작성할 수 있으며, 이것을 Custom Hooks라고 한다. 

- 여러 컴포넌트에서 재활용이 가능하기 때문에 중복 코드를 줄일 수 있다. 
- 컴포넌트와 로직을 분리할 수 있다. 
- 컴포넌트와 로직을 조합하는 형태로 작성할 수 있다. 