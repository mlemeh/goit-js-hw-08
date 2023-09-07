import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form")

let feedbackFormState = {email : "", message : ""} 

if (localStorage.getItem("feedback-form-state")) {
    feedbackFormState = JSON.parse(localStorage.getItem("feedback-form-state"));
    form.email.value = feedbackFormState.email;
    form.message.value = feedbackFormState.message;
}
 
function handlerInput() {
    feedbackFormState.email = form.email.value;
    feedbackFormState.message = form.message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
}

const handlerThrottleInput = throttle(handlerInput, 500);

function handlerSubmit(e) {
    e.preventDefault();

    feedbackFormState = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(feedbackFormState);

    feedbackFormState = { email: "", message: "" };
    form.email.value = feedbackFormState.email;
    form.message.value = feedbackFormState.message;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
}

form.addEventListener("input", handlerThrottleInput)
form.addEventListener("submit", handlerSubmit)

