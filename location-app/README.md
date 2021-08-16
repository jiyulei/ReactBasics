npm start;
changing simulate location in broswer by hitting sensor.

Some Review of this little app:

1. 初始化 state 的两种写法 （1.constructor 中 2. 直接赋值）
2. dataloading 在 componentDidMount 中
3. conditional render 包在函数中，不要直接写在 render 方法中，避免代码冗余
4. 根据传入参数来决定显示一些 hard coded 的内容时，活用 config （此例 seasonConfig）
5. defaultProps
6. `${}` css 中传入变量的写法
