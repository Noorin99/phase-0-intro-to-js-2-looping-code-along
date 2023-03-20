// Code your solutions in this file
const writeCards = (gifts, eventName) => {
  const result = [];
  for (let i = 0; i < gifts.length; i++) {
    let card =
      "Thank you, " + gifts[i] + ", for the wonderful " + eventName + " gift!";
    result.push(card);
  }
  return result;
};

const countDown = (num) => {
  while (num >= 0) {
    console.log(num);
    num--;
  }
};
