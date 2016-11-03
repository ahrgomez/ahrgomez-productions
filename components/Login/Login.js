import React, { Component } from 'react'
import Relay from 'react-relay'

class Login extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.doLogin(this.state.email, this.state.password);
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <div className="login">
                <div className="row">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="col-md-offset-3 col-md-6 nopadding">
                            {this.props.User.email}
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

Login = Relay.createContainer(Login, {
    fragments: {
    User: () => Relay.QL`
          fragment on User {
            email,
            aka
          }
    `,
    },
});

export default Login;
