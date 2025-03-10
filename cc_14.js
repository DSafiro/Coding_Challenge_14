// Task 2: Support Tickets Dynamic Addition
function createSupportTicket (name, issue, level) {
    const ticketContainer = document.getElementById("ticketContainer"); // Finds ticket container by using getElementById

    const ticket = document.createElement("div"); // Creates new div class for ticket
    ticket.setAttribute("class", "support-ticket"); // Sets attribute to ticket

    const customerName = document.createElement("h3"); // Creates new heading for customer name
    customerName.textContent = name; // Adds customer name

    const issueDescription = document.createElement("p"); // Creates new paragraph for issue description
    issueDescription.textContent = `Issue Description: ${issue}`; // Adds issue description

    const priorityLevel = document.createElement("label"); // Creates new label for priority level
    priorityLevel.textContent = `Priority Level: ${level}`; // Adds priority level

    if (level.toLowerCase() === "high") { // If level is "high" -> adds ticket to high priority class
        ticket.classList.add("high");
    }; // Part of Task 3
    
    const resolveButton = document.createElement("button"); // Creates button to resolve/remove ticket
    resolveButton.textContent = "Resolve"; // Adds resolve text to button

    // Task 4: Support Ticket Resolution with Event Bubbling
    ticketContainer.addEventListener("click", () => { // When support ticket is clicked -> console logs that a support ticket has been clicked
        console.log("Support ticket has been clicked.");
    }); // Part of Task 4

    resolveButton.addEventListener("click", (event) => {// When resolve button is clicked -> removes ticket from container
    ticketContainer.removeChild(ticket);
    event.stopPropagation() // Prevents ticket container event from bubbling when resolve button is clicked
    }); // Part of Task 4

    // Task 5: Inline Editing for Support Tickets
    const editButton = document.createElement("button"); // Creates button for editing ticket
    editButton.textContent = "Edit"; // Adds edit text to button

    editButton.addEventListener("click", (event) => { // When edit button is clicked -> able to edit text fields
        editButton.style.display = "none"; // Hides edit button
        resolveButton.style.display = "none"; // Hides resolve button

        const customerNameInput = document.createElement("input"); // Creates input for customer name
        customerNameInput.value = customerName.textContent; // Prepopulates input with existing customer name
        ticket.replaceChild(customerNameInput, customerName); // Replaces customer name with input field

        const issueDescriptionInput = document.createElement("input"); // Creates input for issue description
        issueDescriptionInput.value = issueDescription.textContent.replace("Issue Description: ", ""); // Prepopulates input with existing issue description
        ticket.replaceChild(issueDescriptionInput, issueDescription); // Replaces issue description with input field

        const priorityLevelInput = document.createElement("input"); // Creates input for priority level
        priorityLevelInput.value = priorityLevel.textContent.replace("Priority Level: ", ""); // Prepopulates input with existing priority level
        ticket.replaceChild(priorityLevelInput, priorityLevel); // Replaces priority level with input field

        const saveButton = document.createElement("button"); // Creates button for saving ticket
        saveButton.textContent = "Save"; // Adds save text to button

        saveButton.addEventListener("click", (event) => { // When save button is clicked -> saves inputted text
            customerName.textContent = customerNameInput.value; // Updates customer name to new one
            ticket.replaceChild(customerName, customerNameInput); // Updates customer name to a static text field

            issueDescription.textContent = `Issue Description: ${issueDescriptionInput.value}`; // Updates issue description to new one
            ticket.replaceChild(issueDescription, issueDescriptionInput); // Updates issue description to a static text field
            
            priorityLevel.textContent = `Priority Level: ${priorityLevelInput.value}`; // Updates priority level to new one
            ticket.replaceChild(priorityLevel, priorityLevelInput); // Updates priority level to a static text field

            ticket.classList.remove("high"); // Restores ticket to original style
            ticket.style.border = "";
            ticket.style.backgroundColor = "";

            if (priorityLevelInput.value.toLowerCase() === "high") { // If ticket is high priority level -> highlights using "high" class
                ticket.classList.add("high");
                ticket.setAttribute("class", "high");
            };

            saveButton.remove(); // Removes save button when edit is complete
            editButton.style.removeProperty("display"); // Displays edit button again
            resolveButton.style.removeProperty("display"); // Displays resolvbe button again
            event.stopPropagation(); // Preevents ticket container event form bubbling when save button is pressed
        });

        ticket.appendChild(saveButton); // Appends save button to ticket
        event.stopPropagation(); // Prevents container event from bubbling
    });
    
    ticket.appendChild(customerName); // Appends customer name to ticket
    ticket.appendChild(priorityLevel); // Appends priority level to tickets
    ticket.appendChild(issueDescription); // Appends issue description to ticket 
    ticket.appendChild(resolveButton); // Appends resolve button to ticket
    ticket.appendChild(editButton); // Appends edit button to ticket

    ticketContainer.appendChild(ticket); // Appends ticket to ticket container
}; // Function to create support ticket

// Test Cases
createSupportTicket("Dwayne Johnson", "PC is not working.", "High");
createSupportTicket("Kevin Hart", "How do I open word on my phone?", "Low");
createSupportTicket("Jack Black", "I installed a virus and cannot remove it.", "High");

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function highlightHighPriorityTickets () {
    const highPriorityList = document.querySelectorAll(".high"); // Selects all tickets with high priority class
    const highPriorityArray = [...highPriorityList]; // Converts list of high priority tickets into an array

    highPriorityArray.forEach(ticket => {
        ticket.style.border = "2px solid red"; // Adds red border to all high priority tickets
        ticket.style.backgroundColor = "indianred"; // Adds red background color to all high priority tickets
    }); // Highlights high priority tickets
}; // Function to highlight high priority tickets
highlightHighPriorityTickets(); // Calls highlight priority tickets function

