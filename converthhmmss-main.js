const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  // your code here
  if (seconds < 0 || seconds >= 86400) return -1;
  const hours = Math.trunc(seconds / SECONDS_PER_HOUR);
  const mins = Math.trunc((seconds - hours * 3600) / SECONDS_PER_MIN);
  const second = seconds - hours * 3600 - mins * 60;

  return (
    ("0" + hours).slice(-2) +
    ":" +
    ("0" + mins).slice(-2) +
    ":" +
    ("0" + second).slice(-2)
  );
}
console.log(formatTime(3700));
console.log(formatTime(100));
console.log(formatTime(7800));
console.log(formatTime(60));
