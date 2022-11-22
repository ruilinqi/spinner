// process.stdout.write('hello from spinner1.js... \rheyyy\n');
// \r brought our cursor back to the beginning
const addSpinner = (array, timer) => {
  for (let char of array) {
    setTimeout(() => {
      process.stdout.write(char), timer}
      , 
      timer += 200)
  }
};
const array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];
const timer = 100;
addSpinner(array, timer);
