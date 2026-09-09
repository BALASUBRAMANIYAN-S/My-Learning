let myPromises = new Promise((myAccept, myReject) => {
  myAccept("This Is Response");
});

myPromises
  .then((res) => {
    console.log("TRUE", res);
  })
  .catch((res) => {
    console.log("False", res);
  });
