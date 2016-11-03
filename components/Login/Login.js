import React, { Component } from 'react'

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
                            {this.props.userLogged.guid != '' ?
                                <div className="row picture">
                                    <img className="img-circle" src={this.props.userLogged.picture} />
                                </div>
                                : null
                            }
                            {this.props.userLogged.guid != '' ?
                                <div className="row akaLabel">
                                    <span>{this.props.userLogged.aka}</span>
                                </div>
                            : null
                            }

                            <div className="row inputs">
                                {this.props.userLogged.guid == '' ?
                                    <div>
                                        <input placeholder="User..." value={this.state.email}
                                               onChange={this.handleEmailChange.bind(this)}/>
                                    </div>
                                : null
                                }
                                <div>
                                    <input placeholder="Password..." value={this.state.password}
                                           onChange={this.handlePasswordChange.bind(this)} />
                                </div>
                            </div>
                            <div className="row button">
                                <input type="submit"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Login;
