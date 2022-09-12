export const showNotification = (setter) => {
  setter(true);
  //make 2 second timeout function
  setTimeout(() => {
    setter(false);
  }, 2000);
};

export const checkwin = (correct, wrong, word) => {
  let status = "win";
  //check for win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });
  //check for lose
  if (wrong.length === 6) status = "lose";
  return status;
};
