import React from "react"

class UserClass  extends React.Component {

    constructor(props){
        super(props)

        // console.log(this.props);
        // console.log(this.props.name + "Child constructor called");

        this.state={
            // count :0,
            userInfo :{
                name:'dummy',
                location:'dummy'
            }
       
        }
    }


    async componentDidMount(){
        const data  = await fetch("https://api.github.com/users/akashr97")
        const json  = await data.json()

        // console.log("github data",data);
        this.setState({
            userInfo :json
        })

        // console.log(this.props.name + "Child componentDidMount called");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate called");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }

    render(){
        // console.log(this.props.name + "Child render called");
        // const {name,location} = this.props
        // const {count} = this.state
        const {name,location,avatar_url} = this.state.userInfo
   
        return(

            <div className="user-card">
                {/* <h1>Count: {count}</h1>
                <button onClick={()=>{
                    // NEVER UPDATE STATE VARIABLES DIRECTLY
                    this.setState({
                        count : this.state.count + 1
                    })
                }}>Count Increase</button> */}
                <img src={avatar_url} alt="user-img"/>
                <h2>Name: {name}</h2>
                <h3>Location: {location || "India"}</h3>

     
            </div>
        )
    }
}

export default UserClass


// ----MOUNTING----
// Constructor called (dummy)
// Render (dummy) 
//  <HTML (dummy) data>

// ComponentDidMount
// <API Call>
//     <this.setState > -->State variables are updated


// ---UPDATE----

// render(API data)
// <HTML (new API data)>
// componentDidUpdate