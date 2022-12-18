# Text Utils App
This project is a start to learn react properly with project based learning.  
Let's see where it takes. 

## Following CodeWithHarry React Course

### 1. [JSX](https://reactjs.org/docs/introducing-jsx.html) -> [Lec-4](https://youtu.be/JvC7aA24m4Q)

JSX is extension to javascript for creating react components. 

```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

variable name used inside tag is JSX syntax, anything inside {} would be executed as javascript.

### 2. [Props](https://reactjs.org/docs/components-and-props.html) & [PropsTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) -> [Lec-6](https://youtu.be/xvm3X1oyTL8)

Props means Properties  
To send custom values to the custom components we can use props. For eg: NavBar component would need title as one of its properties.

```
const element = <Welcome name="Sara" />;
```

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### 3. [useState](https://reactjs.org/docs/hooks-state.html) -> [Lec-7](https://youtu.be/leBpCqU8wdg)

```
import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("initial value");
  ...
}
```
useState function returns value,function that is initialized to text and setText using array destructuring syntax.  
Any changes to text variable is only possible using setText function that takes the new value.
