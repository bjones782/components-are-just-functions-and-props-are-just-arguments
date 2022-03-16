# Components Are Just Functions and Props Are Just Arguments

A component is just a function. A function that accepts one argument, props. Props is just an object.

Notice in the App component, we can render components in using JSX and the traditional React component rendering syntax:

```
<Greeting name="Nick" />
// or
 <MultiPropComponent food="Ice Cream" color="Green" number={24} />
```

We can also render components using the traditional function invoking JS syntax:

```
{Greeting({ name: "Archer" })}
//or
 {MultiPropComponent({ food: "Wings", color: "Purple", number: 2 })}
```

Notice above to use the traditional JS syntax we had to use JSX brackets in order to invoke our JS

Also notice that even though MultiPropComponent needs multiple props, it only accepts one argument, an object.

NOTE: This is an example to show that components are really just functions, and props are really just an object passed as an argument when invoking a "component function".

**_ YOU SHOULD ALWAYS USE THE TRADITONAL REACT COMPONENT SYNTAX _**
