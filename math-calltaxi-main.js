function getTaxiCount(passengersCount) {
  if (passengersCount <= 0) return -1;
  let taxi_4cho = 0;
  let taxi_7cho = 0;
  if (passengersCount <= 4) taxi_4cho = 1;
  if (passengersCount > 4 && passengersCount <= 7) taxi_7cho = 1;
  if (passengersCount % 7 === 0) taxi_7cho = passengersCount / 7;
  if (passengersCount % 7 !== 0) taxi_7cho = Math.ceil(passengersCount / 7);
  return `Khách hàng đặt ${taxi_4cho} taxi 4 chỗ và ${taxi_7cho} taxi 7 chỗ`;
}
console.log(getTaxiCount(2));
console.log(getTaxiCount(6));
console.log(getTaxiCount(9));
console.log(getTaxiCount(11));
console.log(getTaxiCount(20));
