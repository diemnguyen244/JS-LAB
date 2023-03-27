// using split
function extractDomainV1(email) {
  // your code here
  if (email === "") return "";
  let search = email.search("@");

  let newAr = email.substr(search + 1, email.length - 1);

  return newAr;
}

// using indexOf() and slice()
function extractDomainV2(email) {
  // your code here
  if (email === "") return "";
  let newEmail = email.indexOf("@");
  let newAr = email.slice(newEmail + 1);
  return newAr;
}

console.log(extractDomainV1(""));
console.log(extractDomainV1("alice@gmail.com"));
console.log(extractDomainV1("bob@abc.com"));
console.log(extractDomainV2(""));
console.log(extractDomainV2("alice@gmail.com"));
console.log(extractDomainV2("bob@abc.com"));
