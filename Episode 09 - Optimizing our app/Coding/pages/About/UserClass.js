import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: 'Dummy Name',
                location: "Dummy Location",
            }
        }
        // console.log("child constuctor");
    }
    async componentDidMount() {
        // console.log("child component did mount");
        const data = await fetch("https://api.github.com/users/Anandsg");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        })
    }

    render() {
        // console.log('child render')

        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div>
                <img src={avatar_url} alt="img" />
                <h4>Name: {name}</h4>
                <h4>location: {location}</h4>
                <h4>Contact: Anandsg@hmail.com</h4>
            </div>
        )
    };
};

export default UserClass;
