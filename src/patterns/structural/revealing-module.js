const revealingModule = (() => {
  const privateFunction = () => {
    return "This is a private function";
  };

  const publicFunction = () => {
    return "This is a public function";
  };

  const exposePrivateFunction = () => {
    return `This is the only way to access privateFunction. Here it is: ${privateFunction()}`;
  };

  return {
    publicFunction,
    exposePrivateFunction
  };
})();

module.exports = revealingModule;
