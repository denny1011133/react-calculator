# 簡易計算機

本專案以 React 作為核心的練習主軸，並使用 Create React App 建置。

![Alt calculator](https://i.imgur.com/2waAYj7.png)


## 開發功能

* 可對數字進行基本的四則運算(+/-/*/÷/=/clear(c))
* 可對數字進行正負號切換
* 可對數字進行百分比計算(%)
* 可對數字進行開根號計算
* 對浮點數進行四則運算時，排除不精準的問題(ex:0.1+0.2=0.3)
* 重新整理瀏覽器可以記憶上一次輸入的數字及計算過程
* 解決無窮小數點會超出介面範圍的問題
* 超過數字上限會跳出提示
* 實作四則運算不得除以０
* 於畫面左上方顯示當時計算過程

## 尚未開發功能

* 對計算機進行拖曳功能

大概的實作思考過程
1. 採用 React Dnd libirary
2. 對 Wrapper component 添加 useDrag hook 
3. 對 App component 添加 useDrop hook，並用useState 管理 Wrapper DOM 的位置，並用 useRef()取得 DOM 在畫面上的位置(clientX,ClinetY)
4. 當Wrapper 被 drop 入 App 裡面時， 觸發 callback function，取得滑鼠在畫面上的位置，並更新 state，進而更新 DOM 位置。

## 專案連結
https://relaxed-saha-d75f3a.netlify.app/
