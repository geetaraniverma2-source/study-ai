async function askAI() {
  const question = document.getElementById("question").value;
  const responseDiv = document.getElementById("response");

  responseDiv.innerHTML = "Thinking...";

  const response = await fetch(
    "https://api-inference.huggingface.co/models/google/flan-t5-large",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_HF_TOKEN"
      },
      body: JSON.stringify({
        inputs: question
      })
    }
  );

  const data = await response.json();

  if (data.error) {
    responseDiv.innerHTML = "Model is loading. Try again in 20 seconds.";
  } else {
    responseDiv.innerHTML = data[0].generated_text;
  }
}