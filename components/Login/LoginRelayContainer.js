var LoginContainer = Relay.createContainer(Login, {
    initialVariables: {
        guid: ''
    },
    fragments: {
        // This GraphQL query executes against
        // the schema in the 'schema' tab above.
        //
        // To learn more about Relay.QL, visit:
        //   https://facebook.github.io/relay/docs/api-reference-relay-ql.html
        me: () => Relay.QL`
      fragment on me(guid: $guid) {
        email
      }
    `,
    },
});

export default LoginContainer;