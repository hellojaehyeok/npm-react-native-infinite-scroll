# npm-react-native-infinite-scroll

React Native에서 사용하는 무한스크롤과 역무한스크롤 라이브러리입니다.      
      
무한스크롤은 페이징 처리할 때 많이 사용하며 역무한스크롤의 경우 채팅을 구현할 때 많이 사용합니다.      

사용하시면 깃허브에 ⭐ 한 번만 눌러주시면 감사하겠습니다!!

## Installation
```
npm i @hellojh/react-native-infinite-scroll
```

<br /><br />

## Components
---
|Component   | Description |
|------|-----|
|`<InfiniteScroll></InfiniteScroll>`| 위에서 아래로 향하는 스크롤입니다. |
|`<R_InfiniteScroll></R_InfiniteScroll>`| 아래에서 위로 향하는 스크롤입니다. |

<br /><br />

### InfiniteScroll
일반적인 무한스크롤입니다.

|props   | Description | Type|
|------|-----|-----|
|`endPoint`| 바닥에서부터 `endPoint`의 지점에 도달하였을 때 `onScrollEnd`가 시작됩니다. | Int |
|`onScrollEnd`| 스크롤이 마지막에 도착했을 때 실행시킬 함수입니다. | Function |
   
<br />

sample code      
```
<InfiniteScroll
    endPoint={100}
    onScrollEnd={fetchData}
>
    {
        array.map((item, index) => {
            return(
                <Text key={index}>{item}</Text>
            )
        })
    }
</InfiniteScroll>
```


<br /><br />

### R_InfiniteScroll
일반적인 무한스크롤의 반대입니다.      
스크롤이 제일 위로 도달하였을 때를 감지하며 첫 렌더링 시 스크롤이 제일 아래로 향해있습니다.      

|props   | Description | Type|
|------|-----|-----|
|`onScrollEnd`| 스크롤이 제일 위에 도착했을 때 실행시킬 함수입니다. | Function |
   
<br />

sample code      
```
<R_InfiniteScroll
    onScrollEnd={fetchData}
>
    {
        array.map((item, index) => {
            return(
                <Text key={index}>{item}</Text>
            )
        })
    }
</R_InfiniteScroll>
```