document.getElementById("submit-btn").addEventListener("click",function(){
    let value=document.getElementById("word-input").value;
    sendToGpt();
});

//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

function sendToGpt(){
    let value=document.getElementById("word-input").value;

    let body={
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: value }],
        temperature: "1",
    }
    let headers = {
        Authorization: "Bearer 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",
      };
    axios
    .post("https://api.openai.com/v1/completions", body, {
      headers: headers,
    })
    .then((response) => {
        let reply = response.data.choices[0].message.content;
        document.getElementById("reply-content").textContent = reply;
      });
  }
  