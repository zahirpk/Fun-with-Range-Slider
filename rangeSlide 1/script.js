const rangeValue=document.getElementById('rangeSlider');
const progressValue=document.getElementById('progressSlider');
const sliderValue=document.getElementById('sliderValue');
rangeValue.value = rangeValue.min;
rangeValue.addEventListener('input', function() {
  let getRangeValue = this.value;
  sliderValue.innerHTML = getRangeValue;
  progressValue.style.width = getRangeValue +"%";
  progressValue.style.backgroundColor = "#ffe4a7";
});