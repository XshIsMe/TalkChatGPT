var speech = new SpeechSynthesisUtterance();

function speak(message) {
    speech.text = message;
    speechSynthesis.speak(speech);
}

function cancelSpeak() {
    speechSynthesis.cancel();
}