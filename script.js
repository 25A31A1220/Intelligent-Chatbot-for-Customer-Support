function sendMessage() {
    let input = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (input === "") return;

    chatbox.innerHTML += "<p><strong>You:</strong> " + input + "</p>";

    let response = "";

    let message = input.toLowerCase();

    if (message.includes("hello")) {
        response = "Hello! How can I assist you?";
    }
    else if (message.includes("price")) {
        response = "Please visit our pricing page for details.";
    }
    else if (message.includes("contact")) {
        response = "You can contact us at support@example.com.";
    }
    else if (message.includes("refund")) {
        response = "Refund requests are processed within 5-7 business days.";
    }
    else {
        response = "Sorry, I couldn't understand your question.";
    }

    chatbox.innerHTML += "<p><strong>Bot:</strong> " + response + "</p>";

    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}
