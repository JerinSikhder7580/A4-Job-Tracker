# 1.Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
#### All of those are DOM selector. They help us to select element from dom.
## 1.getElementById()
1.getElementById help us to select an element by it's id. 
2.it's return a single element
### Example: document.getElementById("box")

## 2.getElementsByClassName()
1.getElementsByClassName selects all elements with their specific class name
2.it's return multiple element as a HTMLCollection
### Example: document.getElementsByClassName("container")

## 3.querySelector()
1.querySelector selects the first matching element
2.we can select element according to element's class name/ tag name/ id
3.it's return a single element
### Example: document.querySelector(".close-button")

## 4.querySelectorAll()
1.querySelectorAll selects all the matching elements 
2.we can select elements according to element's class name/ tag name/ id
3.it always return a NodeList 
### Example: document.querySelectorAll("img")


# 2.Create and insert element into the  DOM 

To create an element we use document.createElement("tag name")

We can use  parentElement.appendChild(newElement) or parentElement.innerHTML = newElement   to insert a new element into the DOM.

# 3.Event Bubbling and it works 

Event bubbling is a method to target the parents Element by targeting their child element.
It works after triggering the child and then it moves up to its parent and parents parent and  ultimately it reaches a document.

# 4. Event delegation 
Event delegation is a method to target multiple or single  child element by targeting their mother.   
Instead  of adding eventListener to many child elements we can add one eventListener to their parent . 


# 5. Difference between  preventDefault() and  stopPropagation()
## preventDefault()
It stops the default behavior of a browser  
it doesn't stop bubbling .

## stopPropagation()
It does not stop the default behavior of a browser.
It stops bubbling .





