const obj = {
  Ben10: [22, 30, 11, 17, 15, 52, 27, 12, 50],
  Sameer: [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
  Zeesham: [22, 30, 11, 5, 17, 30, 6, 57],
};

const qualifiedCustomer = (customers) => {
  let rewardBox = {};
  let message = "";
  for (let customer in customers) {
    rewardBox[customer] = obj[customer].filter((el) => el >= 20);
       if (rewardBox[customer].length >= 5) {
      message += `Congratulations ${customer} you just earned PREMIUM MEMBERSHIP \n`;
    }
  }
  return message;
};
console.log(qualifiedCustomer(obj));
