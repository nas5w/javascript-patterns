const decorator = (() => {
  function User(username) {
    this.username = username;
  }

  function DecoratedUser(userInstance, props) {
    for (let prop in props) {
      userInstance[prop] = props[prop];
    }
    return userInstance;
  }

  return {
    User,
    DecoratedUser
  };
})();

module.exports = decorator;
