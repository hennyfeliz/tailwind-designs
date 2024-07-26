export default function updateBackground() {
  const slider = document.getElementById("slider");
  const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.setProperty("--range-progress", `${value}%`);
}
