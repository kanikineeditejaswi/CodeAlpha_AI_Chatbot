const faqs = [

{
    keywords:["ai","artificial intelligence"],
    answer:"Artificial Intelligence (AI) enables machines to simulate human intelligence and solve problems."
},

{
    keywords:["machine learning","ml"],
    answer:"Machine Learning is a subset of AI that learns from data and improves automatically."
},

{
    keywords:["data science"],
    answer:"Data Science combines statistics, programming, and domain knowledge to extract insights from data."
},

{
    keywords:["deep learning"],
    answer:"Deep Learning uses neural networks with multiple layers to process complex data."
},

{
    keywords:["nlp","natural language processing"],
    answer:"Natural Language Processing helps computers understand and communicate in human language."
},

{
    keywords:["python"],
    answer:"Python is one of the most popular programming languages for AI, Machine Learning, and Data Science."
},

{
    keywords:["chatbot"],
    answer:"A chatbot is a software application that interacts with users through text or voice conversations."
},

{
    keywords:["codealpha","internship"],
    answer:"CodeAlpha Internship provides practical project experience to students and helps build industry-ready skills."
}

];

function sendMessage(){

    const input = document.getElementById("userInput");
    const text = input.value.trim();

    if(text === "") return;

    const chatBox = document.getElementById("chatBox");

    /* User Message */

    const userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.textContent = text;

    chatBox.appendChild(userDiv);

    let reply =
    "Sorry, I couldn't understand that question. Please ask about AI, ML, Data Science, Python, or CodeAlpha Internship.";

    const userText = text.toLowerCase();

    for(let faq of faqs){

        for(let keyword of faq.keywords){

            if(userText.includes(keyword.toLowerCase())){
                reply = faq.answer;
                break;
            }
        }

        if(reply !==
        "Sorry, I couldn't understand that question. Please ask about AI, ML, Data Science, Python, or CodeAlpha Internship."){
            break;
        }
    }

    setTimeout(()=>{

        const botRow = document.createElement("div");
        botRow.className = "bot-row";

        botRow.innerHTML = `
            <div class="avatar">🤖</div>

            <div class="bot-message">
                <p>${reply}</p>
            </div>
        `;

        chatBox.appendChild(botRow);

        chatBox.scrollTop = chatBox.scrollHeight;

    },500);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}

document
.getElementById("userInput")
.addEventListener("keypress",function(e){

    if(e.key === "Enter"){
        sendMessage();
    }

});