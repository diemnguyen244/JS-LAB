function checkInclueEmailAdd(str) {
  if (str === "") return "";

  return str.includes("@gamil.com");
}

console.log(checkInclueEmailAdd("bfdjsakfnjdsafnks"));
console.log(checkInclueEmailAdd("bfdjsakfnjdsafnks.@gamil.com"));
console.log(checkInclueEmailAdd("bfdjsakfnjdsafnks@gamil.com"));
console.log(checkInclueEmailAdd("bfdjsakfnjdsafnks@amil.com"));
