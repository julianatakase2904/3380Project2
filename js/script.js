// Get list of all contacts
const contactList = document.getElementsByClassName("contact-item")
console.log(contactList)

// Maximum number of contacts per page
const maxNumberContacts = 10

// Call removeContacts to remove all contacts first
removeContacts(contactList)

// Call displayContactsPerPage to add the contacts in each page, starting with page 1
displayContactsPerPage(contactList, 1)

// Call pageLink to create the pages
pageLink(contactList)

// Function to remove contacts from page
function removeContacts (contactList) {
    for (var i = 0; i < contactList.length; i++) {
        contactList[i].style.display = "none"
    }
}

// Function to display contacts per page
function displayContactsPerPage(contactList, pageNumber) {
    // Identify the number of the first and last contact of each page
    var firstContactOfPage = (pageNumber * maxNumberContacts) - maxNumberContacts
    var lastContactOfPage = pageNumber * maxNumberContacts

    for(var i = firstContactOfPage; i < lastContactOfPage; i++) {
        // For the contacts between first contact and last contact of each page, display the contact is on
        contactList[i].style.display = "block"
    }
}

// Function to create link for pages
function pageLink(contactList) {
    // Calculate the number the total number of pages
    var numberOfPages
    
    // Check if the division or Total Contacts and number of contact leaves remaining, add one more page
    if(contactList.length % maxNumberContacts > 0) {
        numberOfPages = Math.floor(contactList.length/maxNumberContacts) + 1  
    } else {
        numberOfPages = Math.floor(contactList.length/maxNumberContacts)
    }
    console.log(numberOfPages)

    // Get the div, classname page
    let page = document.getElementsByClassName("page")[0]
    
    // Create div name pagination and ul element
    let pagination = document.createElement('div')
    pagination.className = "pagination"
    let ul = document.createElement('ul')
    
    // Create the page links 
    for (let i = 0; i < numberOfPages; i++){

        // Create li and a elements and set the attribute 
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.setAttribute("href","#")

        // Include text context to element a
        a.textContent = i + 1

        // Set the first page link to active
        if (i == 0) {
            a.className = "active"
        }

        // Append a to li and li to ul
        li.appendChild(a)
        ul.appendChild(li)

        // Add event listener to a element
        a.addEventListener('click', () => {
            // Set class name to ""
            let listOfAElements = document.getElementsByTagName("a")
            for(let i = 0; i < listOfAElements.length; i++) {
                listOfAElements[i].className = ""
            }

            // Set to active when a is clicked
            a.className = "active"

            // Remove contacts from page
            removeContacts(contactList)
            
            // Display contacts according to the page number
            displayContactsPerPage(contactList,(i + 1))
        })
    }
    // Append ul to pagination and pagination to page
    pagination.appendChild(ul)
    page.appendChild(pagination)
   
}
      





