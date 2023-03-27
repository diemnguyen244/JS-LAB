function getErrorMessage(errorCode) {
  let message = "";
  switch (errorCode) {
    case "E01":
      message = "invalid user name";
      break;
    case "E02":
      message = "many attempts";
      break;
    case "E03":
      message = "missing data";
      break;
    default:
      message = "something went wrong";
  }
  return message;
}

//e2
function getErrorMessage(errorCode) {
  const errorMap = {
    E01: "invalid user name",
    E02: "many attempts",
    E03: "missing data",
  };
  return errorMap[errorCode] || "something went wrong";
}

console.log(getErrorMessage("E03"));
