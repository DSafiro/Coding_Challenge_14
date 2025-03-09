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

    const resolveButton = document.createElement("button"); // Creates button to resolve/remove ticket
    resolveButton.textContent = "Resolve"; // Adds resolve text to button

    resolveButton.addEventListener("click", () => // When resolve button is clicked -> removes ticket from container
    ticket.remove());

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