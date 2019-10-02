import React from 'react';
import Editor from './Editor.js';
import Preview from './Preview';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }

        // this.downloadMarkdown = this.downloadMarkdown.bind(this)
        // this.downloadHTML = this.downloadHTML.bind(this)
    }


    downloadMarkdown() {
        const file = new Blob([this.state.text], { type: 'text/plain' });


    }

    downloadHTML() {

    }

    updateParentState(markdown) {
        this.setState({ text: markdown });
    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-6">
                        <Editor updateParentState={this.updateParentState.bind(this)} />

                    </div>
                    <div class="col-6">
                        <div class="card">
                            <div class="card-body">
                                <Preview markdown={this.state.text} />

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <button type="button" class="btn btn-dark btn-block">Download Markdown</button>
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-dark btn-block">Download HTML</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

    //     constructor(props) {
//         super(props)
//         this.state = {}
//     }

//     // getText = () => {
//     //     let newState = this.state;
//     //     this.setState(converter.makeHtml(newState))
//     // }


//     render() {
//         return (
//             <div class="row">
//                 <div class="col-6">
//                     <Editor />
//                 </div>
//                 <div class="col-6">
//                     <div class="card">
//                         <div class="card-body">
//                             <Preview />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// class Editor extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             text: ""
//         };
//     };

//     handleChange(event) {
//         this.setState({ text: event.target.value });
//         console.log(event.target.value)
//     };


//     render() {
//         const { editor_text } = this.state;
//         return (
//             <form id="editor">
//                 <div class="form-group">
//                     <textarea
//                         type="text"
//                         class="editor"
//                         // name="text"
//                         // value={this.state.text}
//                         onChange={this.handleChange}
//                     />
//                 </div>
//             </form>
//         );
//     }
// }

// class Preview extends React.Component {
//     // constructor() {
//     //     super();
//     // }
//     render() {
//         return (
//             <div>
//                 {this.props.text}
//             </div>
//         )
//     }
// }

// // ReactDOM.render(<App />, document.getElementById('app'));





// // ReactDOM.render(<Preview />, document.getElementById('preview'));

