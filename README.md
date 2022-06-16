# odin-cv-app-v2

# Reflections:

- Enter on textarea: use `white-space: pre-wrap`
- use `prevState` argument when want to reference old state. Don't use `this.state`
- I can do other methods within `this.setState`, just before returning the "states".
- Data attributes are very helpful in setting states.
- Conditional rendering tips:
  - 1. create a new state and create conditions, pass that state as a prop into child component
  - 2. ternary operators
- States should be where other components who need it can access it.
- To _send_ data to a child component, pass the _data_(usually state) as a prop
- To _receive_ data from a child component, send a _function_ from a parent to that child as a prop eg. I can change the state in the parent component with that data from the child.
