[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) 
# 基于create-react-app进行改造的项目结构

#### todos
- react-router-dom
- redux
- react-redux
- redux-actions
- 指令创建一级模块
- 指令创建二级模块
- 脚手架生成
- 集成和交付支持


#### 有关redux-actions

- redux-actions是什么

    redux的符合flux规范的action管理工具

- 有什么好处

    当项目中的状态比较多的时候， reducer会变得非常冗余， 尽管可以拆分， 但设置action变量名， 创建action对象或者action函数， 以及把action整合进reducer， 非常的繁琐， reducer-actions工具集可以把创建action函数， action与reducer关联， 彻底解脱switch语句。

- 连接
    - [redux-actions](https://github.com/redux-utilities/redux-actions)
    - [文档地址](https://redux-actions.js.org/)
