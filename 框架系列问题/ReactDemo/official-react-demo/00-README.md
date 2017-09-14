## React 用于构建用户界面的JAVASCRIPT库
* 声明式 
    轻松的创建用户交互界面
* 组件化 
    创建好拥有各自状态的组件，再由组价构成复杂的界面

### 组件
> React组件使用名为render()的方法，接收数据作为输入，输出页面中对应展示的内容。
>> 在使用React时，也可以不使用jsx语法，可以使用被编译之后的代码：
```
    //jsx语法
    class HelloMessage extends React.Compontent{
        render(){
            return <div>Hello {this.props.name}</div>
        }
    }
    ReactDOM.render(
        <HelloMessage name="John"/>,
        mountNode
        );

    //compileJS
    class HelloMessage extends React.Compontent{
        render(){
            return React.createElement(
                "div",
                "null",
                "Hello",
                this.props.name
            );
        }
    }
    ReactDOM.render(
        React.createElement(HelloMessage,{name:'john'}),
        mountNode
        )
```

### 有状态组件
> 组件中除了使用传入的数据以外(通过this.props访问传入的数据)，组件还可以拥有其内的状态数据(通过this.state访问装态数据)。当组件的装态数据改变时，组件会调用render()方法重新渲染

> 组件的生命周期分为三个状态：
            1.Mounting:已插入真实的DOM
            2.Updating:正在被重新渲染
            3.Unmounting:已移除真实的DOM

            React为每个状态都提供了两种处理函数，will函数在进入之前调用，did函数在进入状态之后调用
            三种状态共计五种处理函数
            componentWillMount()
            componentDidMount()
            componentWillUpdate(object nextProps,object nextState)
            componentDidUpdate(object prevProps,object prevState)
            componentWillUnmount()

            此外，React还提供两种特殊状态的处理函数
            componentWillReaciveProps(object nextProps);已加载组件收到新的参数时调用
            shouldComponentUpdate(object nextProps, object nextState);组件判断是否重新渲染时调用

```
    class Timer extends React.Component{
        constructor(props){
            super(props);
            this.state = {secondElapsed:0};
        }

        tick(){
            this.setState((prevState) => ({
                secondsElapsed:prevState.secondsElapsed + 1
            }));
        }
        compontentDidMount(){
            this.interval = setInterval(() => this.tick(),1000);
        }
        compontentWillUnmount(){
            clearInterval(this.interval);
        }
        render(){
            return (
                <div>Seconds Elapsed:{this.state.secondsElapsed}</div>
            );
        }
    }
    ReactDOM.render(<Timer />,MountNode)
```

### 应用
> 使用props和state，我们可以创建一个简易的TODO应用。
```
    class TodoApp extends React.Compontent{
        constructor(props){
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.state = {items:[],text:''};
        }
        render(){
            return (
                <div>
                    <h3>TODO</h3>
                    <TodoList items = {this.state.items} />
                    <form onSubmit = {this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                    </form>
                </div>
            );
        }
        handleChange(e){
            this.setState({text:e.target.value});
        }

        handleSubmit(e){
            e.preventDefault();
            var newItem = {
                text:this.state.text,
                id:Date.now()
            };
            this.setState((prevState)=>({
                items:prevState.items.concat(newItem),
                text:''
            }))
        }
    }

    class TodoList extends React.Compontent{
        render(){
            return (
                <ul>
                    {this.props.items.map(item => (<li key = {item.id}>{item.text}</li>))}
                </ul>
            )
        }
    }

    ReactDOM.render(<TodoApp />,mountNode)
```