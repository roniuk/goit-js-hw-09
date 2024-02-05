const form = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";


form.addEventListener("input", () => {
    const userEmail = form.elements.email.value.trim();
    const userMessage = form.elements.message.value.trim();
    
    const userData = {
        email: userEmail,
        message: userMessage,
    }

    saveToLocalStorege(storageKey, userData);
});

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const data = loadFromLocalStorege(storageKey) || {};
    if (data.email === "" || data.message === "") {
        alert("All form fields must be filled in");
        return;
    }
     console.log(data);
    form.reset();
    localStorage.removeItem(storageKey);
});


function saveToLocalStorege(key, value) {
    const toJSON = JSON.stringify(value);
    localStorage.setItem(key,toJSON);
}

function loadFromLocalStorege(key) {
    const fromJSON = localStorage.getItem(key);;
    try {
        const result = JSON.parse(fromJSON);
        return result;
    }
    catch {
        return "ERROR"; 
    }  
}

function restartedPage() {
    const data = loadFromLocalStorege(storageKey) || {};
    form.elements.email.value = data.email || "";
    form.elements.message.value = data.message || "";
}

restartedPage();