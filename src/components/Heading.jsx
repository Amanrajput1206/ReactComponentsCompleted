import React from "react";
//Since we are writing jsx code, we need the react module because it contains the compiler
// That converts this jsx code to javascript
// Notice that the name of the function is in pascalcase which helps react to
// differentiate between our custom tags and react native tags
function Heading() {
  return <h1>My Favourite Foods</h1>;
}
/*Here we have exported this function, we need to then import this particular function from
this file to use it. Notice we have not used braces () when exporting */
export default Heading;
