class Welcome extends React.Component{
    state={
        name:"amina"
    }
    handleClick=()=>this.setState({name:'arya'})
    render(){
        return(
            <>
            <button onClick={this.handleClick}> clickMe</button>
            </>
        )
    }
}

export default Welcome