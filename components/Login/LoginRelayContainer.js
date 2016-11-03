import Relay from 'react-relay';
import LoginComponent from './Login';

export default Relay.createContainer(LoginComponent, {
    fragments: {
        user: () => Relay.QL`
            fragment on login(email:"ahrgomez@gmail.com", password:"Alex7390") { guid }`
    }
});