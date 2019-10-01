import React from 'react';
import ReactDOM from 'react-dom';
import { timingSafeEqual } from 'crypto';
const showdown = require("showdown")

const converter = new showdown.Converter()

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    // getText = () => {
    //     let newState = this.state;
    //     this.setState(converter.makeHtml(newState))
    // }


    render() {
        return (
            <div class="row">
                <div class="col-6">
                    <Editor />
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <Preview />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Editor extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ""
        };
    };

    handleChange(event) {
        this.setState({ text: event.target.value });
        console.log(event.target.value)
    };


    render() {
        const { editor_text } = this.state;
        return (
            <form id="editor">
                <div class="form-group">
                    <textarea
                        type="text"
                        class="editor"
                        // name="text"
                        // value={this.state.text}
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        );
    }
}

class Preview extends React.Component {
    // constructor() {
    //     super();
    // }
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}

// ReactDOM.render(<App />, document.getElementById('app'));





// ReactDOM.render(<Preview />, document.getElementById('preview'));

