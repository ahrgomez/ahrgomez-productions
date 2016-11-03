import Relay from 'react-relay'

class LoginRoute extends Relay.Route {
    static routeName = 'MeRoute';

    static routeParams = {
        guid: ''
    };

    static queries = {
        // Here, we compose your Relay container's
        // 'greetings' fragment into the 'greetings'
        // field at the root of the GraphQL schema.
        me: (Component, {guid}) => Relay.QL`
      query {
        me {
          ${Component.getFragment('me', {guid})},
        },
      }
    `,
    };
}

export default LoginRoute;