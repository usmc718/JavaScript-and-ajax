document.addEventListener('DOMContentLoaded', function () {
    function getTicket(ticketnum) {
        var url = 'https://jscript.rdm/ticketrequest.asp/?ticketnumber=' + ticketnum;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to retrieve ticket information');
                }
                return response.json();
            })
            .then(ticket => {
                displayTicketInfo(ticket);
            })
            .catch(error => {
                console.error(error.message);
            });
    }

    function displayTicketInfo(ticket) {
        var ticketInfoDiv = document.getElementById('ticketInfo');

        // Construct HTML to display ticket information
        var html = '<h2>Ticket Information</h2>';
        html += '<p><strong>Request Date:</strong> ' + ticket.requestDate + '</p>';
        html += '<p><strong>Employee ID:</strong> ' + ticket.employeeID + '</p>';
        html += '<p><strong>User Name:</strong> ' + ticket.firstName + ' ' + ticket.lastName + '</p>';
        html += '<p><strong>Problem Description:</strong> ' + ticket.problemDescription + '</p>';
        html += '<p><strong>Status:</strong> ' + ticket.status + '</p>';
        html += '<p><strong>Response:</strong> ' + ticket.response + '</p>';

        // Update the HTML content of the ticketInfoDiv
        ticketInfoDiv.innerHTML = html;
    }

    // Example usage:
    getTicket('123456'); // Replace '123456' with the actual ticket number
});
