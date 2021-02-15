"use strict";
let homeownerNameInput = document.querySelector("#homeowner-name");
let homeownerHouseNumberInput = document.querySelector(
  "#homeowner-house-number"
);
let homeownerStreetNameInput = document.querySelector("#homeowner-street-name");
let treeTypeSelect = document.querySelector("#tree-type");

// TODO create a variable for city input element
let cityInput = document.querySelector("#city");
// TODO create a variable for zip code input element
let zipCodeInput = document.querySelector("#zipcode");

let submitButton = document.querySelector("#submit-order");

let orderSummaryParagraph = document.querySelector("#order-summary");
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  let name = homeownerNameInput.value;
  let houseNumber = homeownerHouseNumberInput.value;
  let streetName = homeownerStreetNameInput.value;
  let treeType = treeTypeSelect.value;

  // TODO get the value from the input#city
  let city = cityInput.value;
  // TODO get the value from the input#zipcode
  let zipCode = zipCodeInput.value;
  // TODO Validate that all six input and select elements have been completed
  // validate();
  // TODO Validate the zipcode is in the range 55001 and 56763. This will check that the zip code is in Minnesota.

  let errors = [];
  // If a form element has not been completed, add an error message to the errors array (use push)
  if (!name) {
    errors.push("Enter the homeowner's name");
  }
  if (!houseNumber) {
    errors.push("Enter house number");
  }
  if (!streetName) {
    errors.push("Enter street name");
  }
  if (!city) {
    errors.push("Enter city name");
  }
  if (!zipCode || zipCode < 55001 || zipCode > 56763) {
    errors.push("Enter zip code between 55001-56763");
  }
  if (!treeType) {
    errors.push("select a tree");
  }
  if (errors.length > 0) {
    let errorMsg = errors.join("\n");
    alert(errorMsg);
    return;
  }
  orderSummaryParagraph.innerHTML = `Address:${name} ${houseNumber} ${streetName} ${city} MN ${zipCode} ${treeType}`;
  orderSummaryParagraph.append();
  // TODO - If there are any errors after checking all of the elements,
  // display an alert with all of the error messages (use join)
  // and then return from this function to prevent further processing

  // TODO - If there are no errors, use a template string to display an order summary in the order summary paragraph
});

// function validate() {
//   if (homeownerNameInput.value == "") {
//     return false;
//   }
//   if (homeownerHouseNumberInput.value == "") {
//     return false;
//   }
//   if (homeownerStreetNameInput.value == "") {
//     return false;
//   }
//   if (treeTypeSelect.value == "") {
//     return false;
//   }
//   if (cityInput.value == "") {
//     return false;
//   }
//   if (zipCodeInput.value == "") {
//     return false;
//   }
//   return true;
// }
