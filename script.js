/* Home JavaScript */
const typingAnimationElement = document.getElementById('typing-animation');
const typingTexts = ['Engineer', 'Software Tester', 'Frontend Developer'];
const typingSpeed = 200; // Speed of typing (in milliseconds)
const pauseBetweenTexts = 1000; // Pause before deleting text (in milliseconds)

async function playTypingAnimation(text) {
  for (let i = 0; i < text.length; i++) {
    typingAnimationElement.textContent += text[i];
    await new Promise(resolve => setTimeout(resolve, typingSpeed));
  }

  await new Promise(resolve => setTimeout(resolve, pauseBetweenTexts));

  for (let i = text.length; i >= 0; i--) {
    typingAnimationElement.textContent = text.substring(0, i);
    await new Promise(resolve => setTimeout(resolve, typingSpeed));
  }

  await new Promise(resolve => setTimeout(resolve, typingSpeed));

  playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
}

playTypingAnimation(typingTexts[0]);



