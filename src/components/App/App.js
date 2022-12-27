import { Component } from "react";
import './App.scss'
import Header from "../Header/Header";

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    title: 'Read book'
                },
                {
                    title: 'Run'
                },
                {
                    title: 'Exercise'
                }
            ]
        }

    }
    render() {
        return (
            <Header todo={this.state.data} />
        )
    }
}

export default App