let actions = {
    doLogin: function(email, password) {
        return {
            type: 'DO_LOGIN',
            email: email,
            password: password
        }
    }
}

export default actions
