# 왜 리액트를 사용하는가?

## 첫째, 강력한 추상화 도구인 컴포넌트를 사용할 수 있다!
컴포넌트는 복잡한 문제를 쪼개어서 해결 할 수 있다! 
쪼개어서 해결하면 좋은 점은 
1. 재사용성
2. 가독성이 좋다
3. 유지보수 하기 좋다

## 둘째, 옵져버블이 필요없는 리액티브 프로그래밍
무슨 복잡한 과정 생각 안하고 그냥 주어진 데이터에 따라서 어떻게 렌더링 해줄지 작성하면 된다. 

## 셋째, 가상 DOM(Document Object Model)을 통한 빠른 랜더링
가상 DOM을 보고 진짜 DOM을 그린다
가상 DOM이 변경되면 그 전의 가상 DOM과 비교하여 바뀐 부분만 
진짜 DOM의 그 부분을 변경한다! 그래서 빠르다!