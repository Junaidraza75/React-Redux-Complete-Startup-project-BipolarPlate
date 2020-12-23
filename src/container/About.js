import React from 'react'
import { Link } from "react-router-dom";
class About extends React.Component{
    
    gotoHome =()=>{

            this.props.history.push('/')
    }
    
    render(){
        return(
            <div>
                <h1>About</h1>
                {/* <Link to="/"> GO To HOME </Link> */}
                <button onClick={this.gotoHome}>GOTO HOME</button>
            </div>
        )
    }
}

export default About;