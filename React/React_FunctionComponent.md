# React의 Function Copmonent 에 관하여

## 기본 형태 
```js
const test = () => {
    return <div>test</div>
}
```

## 반복 컴포넌트 작성
map을 이용하여 반복되는 컴포넌트를 작성한다. 
```js
const text = () => {
    const texts = ['a', 'b', 'c'];

    return (
        {texts.map((text, index) => (
            <div key={index}>{text}</div>
        ))}
    )
}
```

### key가 필요한 이유!!
- 이전 key값과 새로운 key값이 값으면 기존의 컴포넌트이니 새로 그리지 않는다.
- 그러므로 key 값은 중복되지 않는 유일한 값이어야한다.
- string이나 number만 지정할 수 있다. 