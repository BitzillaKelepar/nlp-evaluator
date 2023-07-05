import {formatScoreTag} from "./formatScoreTag";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById("url").value;
    const isUrl = Client.isUrl(formText);
    console.log("::: Form Submitted :::")

    // check if text is a valid URL & update UI
    if (isUrl) {
        postData("http://localhost:8081/api", {url: formText})
            .then(function (res) {
                updateUI(res)
            })
    } else {
        resetUI();
        document.getElementById("results").innerHTML = "Please insert a valid URL.";
    }
}

// Post data function
const postData = async (url = "", data = {}) => {
    // Debugging
    console.log(data);
    const res = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await res.json();
        console.log("Returned Data from MeaningCloud:", newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

// Update UI function
function updateUI(data) {
    try {
        // reset DOM
        resetUI();
        // update DOM
        document.getElementById("polarity").innerHTML = `Polarity: ${formatScoreTag(data.score_tag)}`;
        document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
        document.getElementById("text").innerHTML = `${data.sentence_list[0].text}`;
    } catch (error) {
        console.log("error", error);
    }
}

// Reset UI function
function resetUI() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("polarity").innerHTML = "";
    document.getElementById("agreement").innerHTML = "";
    document.getElementById("subjectivity").innerHTML = "";
    document.getElementById("confidence").innerHTML = "";
    document.getElementById("irony").innerHTML = "";
    document.getElementById("text").innerHTML = "";
}

export {handleSubmit}