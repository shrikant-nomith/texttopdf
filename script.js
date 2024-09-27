// Get elements
const textInput = document.getElementById("text-input");
const convertBtn = document.getElementById("convert-btn");

// Add event listener to the convert button
convertBtn.addEventListener("click", () => {
  // Get the text input
  const text = textInput.value.trim();

  if (!text) {
    alert("Please enter some text.");
    return;
  }

  // Use jsPDF to create PDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Add the text to the PDF
  doc.text(text, 10, 10);

  // Save the PDF
  doc.save("document.pdf");
});
