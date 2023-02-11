function chatGPT(apiKey, message, callback) {
    var data = {
        "model": "text-davinci-003",
        "prompt": message,
        "temperature": 0.5,
        "max_tokens": 150,
        "top_p": 1.0,
        "frequency_penalty": 0.0,
        "presence_penalty": 0.0
    };
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.openai.com/v1/completions ");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + apiKey);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var res = eval("(" + xhr.responseText + ")");
            var resText = res["choices"][0]["text"].trim();
            callback(resText);
        } else if (xhr.readyState == 4 && xhr.status == 401) {
            callback("401");
        } else if (xhr.readyState == 4 && xhr.status != 200 && xhr.status != 401) {
            callback("Error");
        }
    };
    xhr.send(JSON.stringify(data));
}