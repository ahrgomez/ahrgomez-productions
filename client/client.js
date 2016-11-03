import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
    userLogged: {
        guid: '12345678',
        aka: 'Agte',
        email: '',
        picture: '/public/images/agte.jpg',
        checked: false
    }
}

//Compruebo cookies para ver si ya se ha logado antes
//Si el guid esta en las cookies hago una query para sacar los datos

let store = configureStore(initialState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)