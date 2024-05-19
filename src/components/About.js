import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props){
    super(props)

    console.log("Parent constructor called");
  }

  componentDidMount(){
    console.log("Parent componentDidMount called");
  }

  render(){
    console.log("Parent render called");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is about page</h2>
        {/* <User/> */}
        <UserClass name ={'First'} location = {'Bangalore Class'}/>
        {/* <UserClass name ={'Second'} location = {'Bangalore Class'}/> */}

      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is about page</h2>
//       {/* <User/> */}
//       <UserClass name ={'Akash Class'} location = {'Bangalore Class'}/>
//     </div>
//   );
// };

export default About;
