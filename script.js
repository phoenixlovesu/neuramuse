// Dictionary mapping moods to drawing prompts
const prompts = {
  happy: [
    "Draw a cat dancing under a disco ball.",
    "Draw a smiling flower waving hello.",
    "Draw a flying hotdog with sunglasses."
  ],
  chill: [
    "Draw a turtle sipping tea by a river.",
    "Draw a cloud sleeping on a tree branch.",
    "Draw a campfire telling stories to marshmallows."
  ],
  dreamy: [
    "Draw a floating island with three moons.",
    "Draw a whale carrying lanterns through space.",
    "Draw a staircase made of stars."
  ],
  sad: [
    "Draw a rainy window with a forgotten toy.",
    "Draw a teacup with a broken heart on it.",
    "Draw a cloud crying over a tiny plant."
  ],
  mad: [
    "Draw a volcano bursting with crayons.",
    "Draw an angry tomato in a boxing ring.",
    "Draw a robot smashing alarm clocks."
  ]
};

// Dictionary mapping moods to Musea sprite filenames
const museaSprites = {
  happy: "images/musea-happy.png",
  chill: "images/musea-chill.png",
  dreamy: "images/musea-dreamy.png",
  sad: "images/musea-sad.png",
  mad: "images/musea-mad.png"
};

// Background color changes per mood
const moodColors = {
  happy: "#fff7ae",
  chill: "#c4fcef",
  dreamy: "#d5b3ff",
  sad: "#6a8caf",
  mad: "#ff8787"
};

// Function called when a mood button is clicked
function setMood(mood) {
  // Get a random prompt from the selected mood
  const moodPrompt = getRandomItem(prompts[mood]);

  // Update Musea's image
  const museaImg = document.getElementById("musea-img");
  museaImg.src = museaSprites[mood];

  // Update the prompt text
  const promptText = document.getElementById("prompt-text");
  promptText.textContent = moodPrompt;

  // Update background color to match mood (optional)
  document.body.style.backgroundColor = moodColors[mood] || "#1a1b2f";
}

// Helper function to pick a random item from an array
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
