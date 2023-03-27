// using if...else
function formatSecondsV1(seconds) {
  // your code here
  if (seconds < 0 || seconds > 60) return -1;

  if (seconds >= 0 && seconds < 10) return `0${seconds}`;
  return seconds.toString();
}
console.log(formatSecondsV1(0));
console.log(formatSecondsV1(1));
console.log(formatSecondsV1(22));
console.log(formatSecondsV1(55));
console.log(formatSecondsV1(60));
console.log(formatSecondsV1(90));

//using slice()
function formatSecondsV2(seconds) {
  // your code here
  if (seconds < 0 || seconds > 60) return -1;

  return ("0" + seconds).slice(-2).toString();
}
console.log(formatSecondsV2(1));
console.log(formatSecondsV2(22));
console.log(formatSecondsV2(55));
console.log(formatSecondsV2(60));
console.log(formatSecondsV2(90));
console.log(formatSecondsV2(0));
