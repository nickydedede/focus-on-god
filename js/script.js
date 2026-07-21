const messages = [
    "✝️ Wear Your Faith Boldly.",
    "👕 Premium Christian Apparel.",
    "🇧🇼 Proudly designed in Botswana.",
    "📦 Nationwide delivery available.",
    "❤️ Need help? We're one message away.",
    "🔥 Explore our Collections."
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
