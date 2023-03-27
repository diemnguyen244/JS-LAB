// using indexOf()
function isSecureUrlV1(url) {
  // your code here
  //validate
  if (url === "") return "";
  if (url.indexOf("https") >= 0) return true;
  if (url.indexOf("wss") >= 0) return true;
  return false;
}

// using startsWith()
function isSecureUrlV2(url) {
  // your code here
  if (url === "") return "";
  if (url.startsWith("https")) return true;
  if (url.startsWith("wss")) return true;
  return false;
}
console.log(isSecureUrlV1("http://abc.com"));

console.log(isSecureUrlV1("https://ezfrontend.com"));

console.log(isSecureUrlV1("wss://chat.ezfrontend.com"));

console.log(isSecureUrlV1("ws://chat.abc.com"));

console.log(isSecureUrlV2("http://abc.com"));

console.log(isSecureUrlV2("https://ezfrontend.com"));

console.log(isSecureUrlV2("wss://chat.ezfrontend.com"));

console.log(isSecureUrlV2("ws://chat.abc.com"));
