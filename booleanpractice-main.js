function getTicketPrice(age) {
  if (age < 0 || age > 125) return -1;
  if (age < 6 || age >= 70) return 0;
  if (age < 12) return 20.0;
  if (age > 12) return 50.0;
}
// console.log(getTicketPrice(20));

//b2
function sayHello(languageCode) {
  const languageMap = {
    en: "Hello",
    vi: "Xin Chào",
    fr: "Bonjour",
    cn: "Nĩn hăo",
    ja: "Konnichiwa",
    ko: "Anyoung haseyo",
  };

  return languageMap[languageCode] || "Hello";
}
// console.log(sayHello("ko"));

//cách 2
function sayHello(languageCode) {
  let result = "";
  switch (languageCode) {
    case "en":
      result = "Hello";
      break;
    case "vi":
      result = "Xin Chào";
      break;
    case "ja":
      result = "Konnichiwa";
      break;
    default:
      result = "Hello";
  }
  return result;
}
console.log(sayHello("ja"));
