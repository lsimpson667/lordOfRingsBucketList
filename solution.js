// Feel free to message me if you want hints or are stuck. 

/////////// Part 1 (Selecting and ManipulatingDOM Elements) ///////////

/* 1.1) Set the first <li> item from the html and print the text from it. 
    Tip: Use console.log() to print result  
*/
let firstListItem = document.querySelector("ul").firstElementChild;
console.log(firstListItem);


/* 1.2) Add a full-stop at the end of each item in all the bucket lists.
    Hint 1: Select All <li> elements.
    Hint 2: Use for loop.
    Hint 3: You will need to use .innerText
*/
// let listIem = document.querySelector("li");
let allListItems = document.querySelectorAll("li");
for (let i = 0; i < allListItems.length; i++) {
    // let newText = document.createTextNode(".");
    // allListItems[i].appendChild(newText);
    let text = allListItems[i].innerText;
    let newText = `${text}.`

    // text = `${allListItems[0]}`;
    console.log(allListItems);
    // console.log(text);
    console.log(newText);
}




/* 1.3) Print the first list item from Gandalf's bucket list. 
    Hint 1: First select the div associated with Gandalf's bucket list.
*/
let gFirstListItem = document.querySelector("#gandalf-list ul").firstElementChild;
console.log(gFirstListItem);


/* 1.4) Change the color of first list item from Gandalf's bucket list to Red.
    Hint 1: You have already selected this list element from previous part.
*/
let redText = gFirstListItem.style.color = "red";



/* 1.5) Add a new item in Frodo's bucket list. 
        The item should 'Sail off With the Elves.'
    Hint 1: Use .createElement() method
    Hint 2: Use .append() 
*/
let newListItem = document.createElement("li").innerText = "Sail off With the Elves.";
// let fUnorderedList = document.querySelectorALL("#frodo-list li");
// let appendNewListItem = fUnorderedList.appendChild(newListItem);

console.log(newListItem);
// console.log(fUnorderedList)
// console.log(appendNewListItem);

/* 1.5) Remove the first item from Frodo's bucket list.
    Hint 1: First select the item
    Hint 2: Use .remove() 
*/
let list = document.querySelector("#frodo-list ul");
let listItems = document.querySelectorAll("li");
list.removeChild(listItems[0]);
console.log(listItems);


////////////// Part 2 (DOM Traversal) /////////////////////

/* 2.1) Print all children of the div with id="gandalf-list"
    Hint 1: select the div first
    Hint 2: use  .children 
*/
let children = document.querySelector("#gandalf-list").children;
console.log(children);


/* 2.2) Print the first child of the div with id="frodo-list" */
let fFirstChild = document.querySelector("div #frodo-list").firstElementChild;
console.log(fFirstChild);

/* 2.3) Print the last child of the div with id="gandalf-list" */ 
let gLastChild = document.querySelector("div #gandalf-list").lastElementChild;
console.log(gLastChild);
/* 2.4) Print the 2nd last child of the div with id="gandalf-list" 
    Hint 1: First select the last child as you did in Part 2.3
    Hint 2: Then use  .previousElementSibling to get the 2nd last child
*/ 
secondToLastChild = gLastChild.previousElementSibling
console.log(secondToLastChild);

/* 2.4) Find the parent element of the div with id="frodo-list" */
let parentElement = document.querySelector("div #frodo-list").parentElement;
console.log(parentElement);


////////////// BONUS /////////////////////
/*  Find out the person who has 'Become White Wizard.' in their bucket list 
    
    Hint 1: You will need to select all <li> elements
    Hint 2: Use .textContent   and === 
    Hint 3: Use .parentElement (You are looking to find the grandparent actually)
*/

let allLis = document.querySelectorAll("li");
for (let i = 0; i < allLis.length; i++) {
    if (allLis[i].textContent === "Become White Wizard.") {
        let parentElem = allLis[i].parentElement;
        console.log(parentElem);
    } else {
        console.log("No Matches!");
    }
}



