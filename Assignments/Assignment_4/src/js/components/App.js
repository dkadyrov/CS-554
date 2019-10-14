import React from 'react';
import Editor from './Editor.js';
import Preview from './Preview';
const marked = require("marked");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.downloadMarkdown = this.downloadMarkdown.bind(this);
        this.downloadHTML = this.downloadHTML.bind(this);

        this.state = {
            text: ""
        }


    }

    downloadMarkdown() {
        const elem = document.createElement("a");
        const file = new Blob([this.state.text], {
            type: 'text/plain'
        });
        elem.href = URL.createObjectURL(file);
        elem.download = "markdownconvert.md"
        document.body.appendChild(elem);
        elem.click();
    }

    downloadHTML() {

        const header = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta http-equiv="X-UA-Compatible" content="ie=edge">\n<meta http-equiv="X-UA-Compatible" content="ie=edge">\n<title>Downloaded Markdown</title>\n<style>\ncode {color: red;}\n</style>\n</head>\n<body>\n';
        const body = marked(this.state.text);
        const footer = "</body>\n</html>";
        const html = header + body + footer;

        const elem = document.createElement("a");

        const file = new Blob([html], {
            type: "text/plain"
        });

        elem.href = URL.createObjectURL(file);
        elem.download = "markdownconvert.html"
        document.body.appendChild(elem);
        elem.click();

    }

    updateParentState(markdown) {
        this.setState({
            text: markdown
        });
    }

    render() {
        return (
            <div>
                <div class="row" >
                    <div class="col-6" >
                        <Editor updateParentState={
                            this.updateParentState.bind(this)
                        } />
                    </div>
                    <div class="col-6" >
                        <div class="card" >
                            <div class="card-body">
                                <Preview markdown={this.state.text} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <button class="btn btn-dark btn-block" onClick={this.downloadMarkdown}> Download Markdown </button>
                    </div>
                    <div class="col-6">
                        <button class="btn btn-dark btn-block" onClick={this.downloadHTML}> Download HTML </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;