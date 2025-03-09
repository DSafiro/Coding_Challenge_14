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

    if (level === "High") { // If level is "High" -> adds ticket to high priority class
        ticket.classList.add("high");
    }; // Part of Task 3
    
    const resolveButton = document.createElement("button"); // Creates button to resolve/remove ticket
    resolveButton.textContent = "Resolve"; // Adds resolve text to button

    // Task 4: Support Ticket Resolution with Event Bubbling
    ticketContainer.addEventListener("click", () => { // When support ticket is clicked -> console logs that a support ticket has been clicked
        console.log("Support ticket has been clicked.")
    }); // Part of Task 4

    resolveButton.addEventListener("click", (event) => {// When resolve button is clicked -> removes ticket from container
    ticketContainer.removeChild(ticket);
    event.stopPropagation() // Prevents ticket container event from bubbling when resolve button is clicked
    }); // Part of Task 4

    ticket.appendChild(customerName); // Appends customer name to ticket
    ticket.appendChild(priorityLevel); // Appends priority level to ticket
    ticket.appendChild(issueDescription); // Appends issue description to ticket 
    ticket.appendChild(resolveButton); // Appends resolve button to ticket

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

