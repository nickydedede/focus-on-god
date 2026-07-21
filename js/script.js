const messages = [
    "✝️ Wear Your Faith Boldly.",
    "👕 Need help choosing a size?",
    "🔥 Explore our latest collections!",
    "📦 Ask us about delivery.",
    "❤️ We'd love to help you place an order!",
    "💬 Chat with Focus On God Apparel!"
];

const chatMessage = document.getElementById("chatMessage");

let currentMessage = 0;

setInterval(() => {

    currentMessage++;

    if(currentMessage >= messages.length){
        currentMessage = 0;
    }

    chatMessage.style.opacity = "0";

    setTimeout(() => {

        chatMessage.textContent = messages[currentMessage];

        chatMessage.style.opacity = "1";

    },300);

},5000);
