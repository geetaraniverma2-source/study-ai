async function askAI() {
  const question = document.getElementById("question").value;
  const responseDiv = document.getElementById("response");

  responseDiv.innerHTML = "Loading...";

  const apiKey = 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;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are Study AI. Answer clearly and simply." },
        { role: "user", content: question }
      ]
    })
  });

  const data = await response.json();
  responseDiv.innerHTML = data.choices[0].message.content;
}