import React, { Component } from "react";
import ReactDOM from "react-dom";

class Preview extends Component {
    render() {
        return (
            test
        )
    }
}

const preview = document.getElementById("preview");
preview ? ReactDOM.render(<Preview />, preview) : false;