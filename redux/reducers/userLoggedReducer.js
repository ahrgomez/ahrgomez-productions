
let userLoggedReducer = function(userLogged = {}, action) {
  switch (action.type) {
    case 'DO_LOGIN':
      return Object.assign({}, userLogged, {checked: true});
    default: 
      return userLogged;
  }
}

export default userLoggedReducer
