# Chocolate Website & React Notes 

This website is a learning project to help understand react. It's annotated throughout. Other notes are contained in this README file. The first section is specific to the Chocolate website. The rest is related to learning and using React

## Chocolate Website 
[insert notes related to chocolate webiste usage]

## Using React 
- logo and favicon go in `/src ` folder 

## Naming convention
- PascalCase for files and functions
- camelCase for instance variables 
```
const myVar = "hey there!"

function MyFunc(){
    ...
}

MyFile.jsx
```

## props 
You can add props using maps, or directly in the component tag in your app.jsx file 
```
function App() {
    return (
        <div className="contacts">
            // These props are inserted directly into the component tag in your jsx
            <Contact  
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone=""
            />
            <Contact />
            <Contact />
            <Contact />
        </div>
    )
}
```

## event listeners 

Read https://reactjs.org/docs/events.html#mouse-events for mouse events 
