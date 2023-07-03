const rangeValue=document.getElementById('rangeSlider');
const progressValue=document.getElementById('progressSlider');
const sliderValue=document.getElementById('sliderValue');
rangeValue.value = rangeValue.min;
rangeValue.addEventListener('input', function() {
  let getRangeValue = this.value;
  sliderValue.innerHTML = getRangeValue;

  progressValue.style.width = getRangeValue +"%";
  progressValue.style.backgroundColor = "#59c8ca";



  const thumbSize = 20; 
  const rangeWidth = parseInt(getComputedStyle(rangeValue).width, 10);
  console.log(rangeWidth)
  const thumbPosition = (getRangeValue / (rangeValue.max - rangeValue.min)) * (rangeWidth - thumbSize);
  console.log(thumbPosition)
  sliderValue.style.left = thumbPosition + "px";
});