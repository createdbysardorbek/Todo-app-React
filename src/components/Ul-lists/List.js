import { Component } from "react";
import './List.scss'

class List extends Component {
    render() {
        return (
            <li>{this.props.title}</li>
        )
    }
}

export default List