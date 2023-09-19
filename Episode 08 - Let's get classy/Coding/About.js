import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props)
        console.log('Parent constructor');
    }

    componentDidMount() {
        // console.log("parent did mount")

    }

    render() {
        // console.log("parent render")
        return (
            <div>
                <UserClass name={"Anand"} location={"Gadag"} />
            </div>
        );
    }
}

export default About;