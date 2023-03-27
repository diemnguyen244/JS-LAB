//cach 1

function handleFullname(str) {
  if (!str) return "";
  const handleStr = str.trim();
  return `${handleStr[0].toUpperCase()}${handleStr.slice(1).toLowerCase()}`;
}

function getFullName(firstName, lastName) {
  const fn = handleFullname(firstName);
  const ln = handleFullname(lastName);
  return `${fn} ${ln}`.trim();
}

//cach 2
function getFullName1(firstName, lastName) {
  if (firstName === "" || lastName === "") return "";
  if (firstName === undefined || lastName === undefined) return "";

  const upperFirstName = firstName[0].toUpperCase();
  const upperLastName = lastName[0].toUpperCase();
  const lowerFirstName = firstName.slice(1).toLowerCase();
  const lowerLastName = lastName.slice(1).toLowerCase();
  return `${upperFirstName}${lowerFirstName} ${upperLastName}${lowerLastName}`.trim();
}

console.log(getFullName1("Alice"));
//--> 'Alice'

console.log(getFullName1("Alice", ""));
//--> 'Alice'

console.log(getFullName1("", "Nguyen"));
//--> 'Nguyen'

console.log(getFullName1("Bob", "Tran"));
//-> 'Bob Tran'

console.log(getFullName("john", "pHAm"));
//--> 'John Pham'
