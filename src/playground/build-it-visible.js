class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'hide details' : 'show details'}
                </button>
                {this.state.visibility && (
                 <div>
                     <p>Hello, you piece of parrot dropping!!</p>
                 </div>
             )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));



// let isVisibilityOn = false;

// const toggleVisibility = () => {
//     isVisibilityOn = !isVisibilityOn;
//     render();
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {isVisibilityOn ? 'hide details' : 'show details'}
//             </button>
//             {isVisibilityOn && (
//                 <div>
//                     <p>Hello, you piece of parrot dropping!!</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById("app"));
// }

// render();