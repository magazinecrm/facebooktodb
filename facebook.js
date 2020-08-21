import React, {Component,useEffect}  from 'react';
import FacebookLogin from 'react-facebook-login';
import firebaseDb from  "../firebase";

export default class Facebook extends Component {

    state = {
        auth: false,
        name: '',
        picture: ''
    };

    responseFacebook = response => {
        console.log(response);
        if(response.status !== 'unknown')
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url
        });

    }

    componentClicked = () => {
        console.log('Facebook btn clicked');
    }

    render(){
        let facebookData;
var usersRef =  firebaseDb.child('users');
var timestamp = new Date().getTime();
usersRef.child(`timestamp`).set(timestamp);
usersRef.child(`nmaex`).set({this.state.name});
        this.state.auth ?
        facebookData = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: '#000'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
    <h2>Welcome {this.state.name}! Do you know God is great</h2>
              <h2> usersRef.child(`noma`).set({this.state.name}) </h2>

                </div>
            ) :
            facebookData = (<FacebookLogin

                autoLoad={true}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);

        return (
            <>
                {facebookData}
            </>
        );
    }
}
