import { Component } from "react";
import './Header.scss'
import List from "../Ul-lists/List";

class Header extends Component {
    
    render() {
        const {todo} = this.props
        return (
            <div className="todo">
                <h1>Todo App</h1>
                <ul>
                    {
                        todo.map(elem=>{
                            return <List title={elem.title}/>
                        })
                    }
                </ul>
                
            </div>
        )
    }
}

export default Header