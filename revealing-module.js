const revealingModule = (() => {
  const privateFunction = () => {
    console.log("This is a private function");
  };

  const publicFunction = () => {
    console.log("This is a public function");
  };

  return {
    publicFunction
  };
})();

revealingModule.publicFunction(); // "This is a pubic function"
revealingModule.privateFunction(); // Not a function
