"use strict";

/* Home address */
const homeStreet = "1 Main St.";
const homeCity = "Sicilia";
const homeState = "MA";
const homeCode = "02103";

/* Work address */
const workStreet = "15 Oak Ln.";
const workCity = "Central City";
const workState = "MA";
const workCode = "02104";

/* Get form elements */
const homeOption = document.getElementById("homeoption");
const workOption = document.getElementById("workoption");

const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const code = document.getElementById("code");

/* Fill Home Address */
homeOption.onclick = function () {
  street.value = homeStreet;
  city.value = homeCity;
  state.value = homeState;
  code.value = homeCode;
};

/* Fill Work Address */
workOption.onclick = function () {
  street.value = workStreet;
  city.value = workCity;
  state.value = workState;
  code.value = workCode;
};

homeOption.checked = true;
homeOption.onclick();


