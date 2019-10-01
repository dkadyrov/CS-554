import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
import Preview from "./preview.jsx"

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            editor_text: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        const { editor_text } = this.state;
        return (
            <form id="editor">
                <textarea
                    // text="SEO title"
                    label="editor_label"
                    type="text"
                    id="editor_text"
                    value={editor_text}
                    handleChange={this.handleChange}
                />
            </form>
        );
    }
}

const wrapper = document.getElementById("editor");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;