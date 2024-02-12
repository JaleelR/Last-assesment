### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
   - React Router is to have mutiple routes on a single page application. it also doesnt cause a full page refresh for smoother user exprerience 
   
- What is a single page application?
    - A single page application that routes to different pages in the application by rendering different components
  
- What are some differences between client side and server side routing?
    - Client side routing changes routes through component rendering with 1 html pages. Also through the server responding to requests based on requested url. 
    - server side routing has multiple html pages with full refreshes
  
  
- What are two ways of handling redirects with React Router? When would you use each?
    - using the redirect component, useful for you shouldnt have gotten here, go here instead

    - calling the .push method on the history object 
    "since you finished this go here

    - What are two different ways to handle page-not-found user experiences using React Router? 
      -using a <route> with path=* at the end of routes will direct any other path not listed to the component inside route
      - using a redirect 


- How do you grab URL parameters from within a component using React Router?
   ``` javascript
          import {useParams} from 'react-router-dom'
          let {id} = useParams();
   ```

- What is context in React? When would you use it?
    - context is a feature that allows you to pass data through a component tree mutiple levels, to avoid prop drilling. It would be useful in situations where a peice of date or information was needed in mutiple components. 
    - you would use it for: 
        - theme switching 
        - user Authentication 
        - state Management 


- Describe some differences between class-based components and function
 - State: classes hold state by using this.state while functional components use useState
 - Syntax: class components extend react.component class whule functional components are js fuctions that return jsx

- What are some of the problems that hooks were designed to solve?
    - Hooks solve using classes and more complex code 
    - code resuabitly 
    - organization of code