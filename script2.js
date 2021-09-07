const addJobBtn = document.querySelector(".addJobBtn");
const addApplicantBtn = document.querySelector(".addApplicantBtn");
const listContainer = document.querySelector(".listContainer");
///Section queries
const applyDateSec = document.querySelector(".applyDateSec");
const companyNameSec = document.querySelector(".CompanyNameSec");
const companyWebsiteSec = document.querySelector(".companyWebsiteSec");
const jobBoardSec = document.querySelector(".jobBoardSec");
const contactSec = document.querySelector(".ContactSec");
const emailSec = document.querySelector(".EmailSec");
const researchedSec = document.querySelector(".researchedSec");
const followUpSec = document.querySelector(".followUpSec");
//input queries
const dateSelected = document.getElementById("dateApplied");
const companyNameInput = document.getElementById("company-name");
const companyURLInput = document.getElementById("website-Url");
const jobBoardInput = document.querySelector("#jobBoard-input");
const contactInput = document.querySelector("#contact-input");
const emailInput = document.querySelector("#email-input");
const researchedDropDown = document.querySelector("#researched");
let applicationNumber = 0;

//items in local storage append here
let jobListingStorage = [];

// function hasWhiteSpace(value) {
//   return /\s/g.test(value);
// }

// savetoLocalStorage();

const dateAppliedSection = () => {
  applicationNumber++;
  //dateApplied section
  const dateApplied = document.createElement("input");
  dateApplied.setAttribute("type", "date");
  dateApplied.classList.add(`dateApplied`);
  dateApplied.value = dateSelected.value;
  //check box
  const checkBox = document.createElement("input");
  checkBox.classList.add(`checkbox-list`);
  checkBox.setAttribute("type", "checkbox");
  // //edit button
  // const editButton = document.createElement("button");
  // editButton.classList.add("editButton");
  // editButton.innerHTML = '<i class="fas fa-paperclip"></i> ';
  dateApplied.addEventListener("click", () => {
    dateApplied.setAttribute("contentEditable", true);
    dateApplied.focus();
  });
  dateApplied.append(checkBox);
  applyDateSec.append(dateApplied);
  applyDateSec.insertBefore(dateApplied, applyDateSec.firstChild);
};
//
//
const companyNameSection = () => {
  applicationNumber++;
  //companyName section
  const companyName = document.createElement("li");
  companyName.classList.add(`companyName`);
  companyNameInput.value === ""
    ? (companyName.innerHTML = "undefined")
    : (companyName.innerHTML = companyNameInput.value);
  //edit button
  // const editButton = document.createElement("button");
  // editButton.classList.add("editButton");
  // editButton.innerHTML = '<i class="fas fa-paperclip"></i> ';
  companyName.addEventListener("click", () => {
    companyName.setAttribute("contentEditable", true);
    companyName.focus();
  });
  // companyName.append(editButton);
  companyNameSec.append(companyName);
  companyNameSec.insertBefore(companyName, companyNameSec.firstChild);
  // companyNameInput.value = "";
};
//
//
//appends company url
const companyUrlSection = () => {
  applicationNumber++;
  //Company Website
  const companyWebsite = document.createElement("li");
  companyWebsite.classList.add(`companyWebsite`);
  companyURLInput.value === ""
    ? (companyWebsite.innerHTML = "Undefined")
    : (companyWebsite.innerHTML = companyURLInput.value);
  // //edit button
  // const editButton = document.createElement("button");
  // editButton.classList.add("editButton");
  // editButton.innerHTML = '<i class="fas fa-paperclip"></i> ';
  companyWebsite.addEventListener("click", () => {
    companyWebsite.setAttribute("contentEditable", true);
    companyWebsite.focus();
  });
  // companyWebsite.append(editButton);
  companyWebsiteSec.append(companyWebsite);
  companyWebsiteSec.insertBefore(companyWebsite, companyWebsiteSec.firstChild);
  // companyURLInput.value = "";
};
//
//appends job board
const jobBoardSection = () => {
  applicationNumber++;
  // JobBoard section
  const jobBoard = document.createElement("li");
  jobBoard.classList.add(`jobBoard`);
  jobBoardInput.value === ""
    ? (jobBoard.innerHTML = "Undefined")
    : (jobBoard.innerHTML = jobBoardInput.value);
  // //edit button
  // const editButton = document.createElement("button");
  // editButton.classList.add("editButton");
  // editButton.innerHTML = '<i class="fas fa-paperclip"></i> ';
  jobBoard.addEventListener("click", () => {
    jobBoard.setAttribute("contentEditable", true);
    jobBoard.focus();
  });
  // jobBoard.append(editButton);
  jobBoardSec.append(jobBoard);
  jobBoardSec.insertBefore(jobBoard, jobBoardSec.firstChild);
  jobBoardInput.value = "";
};
//
//appends contact name
const contactSection = () => {
  applicationNumber++;
  const contact = document.createElement("li");
  contact.classList.add(`Contact`);

  contactInput.value === ""
    ? (contact.innerHTML = "Undefined")
    : (contact.innerHTML = contactInput.value);
  //edit button
  // const editButton = document.createElement("button");
  // editButton.classList.add("editButton");
  // editButton.innerHTML = '<i class="fas fa-paperclip"></i> ';
  contact.addEventListener("click", () => {
    contact.setAttribute("contentEditable", true);
    contact.focus();
  });
  // contact.append(editButton);
  contactSec.append(contact);
  contactSec.insertBefore(contact, contactSec.firstChild);
  contactInput.value = "";
};
//
//appends email
const emailSection = () => {
  applicationNumber++;
  const email = document.createElement("li");
  email.classList.add(`Email`);
  emailInput.value === ""
    ? (email.innerHTML = "Undefined")
    : (email.innerHTML = emailInput.value);
  // email.innerHTML = "email Name";
  // //edit button
  // const editButton = document.createElement("button");
  // editButton.classList.add("editButton");
  // editButton.innerHTML = '<i class="fas fa-paperclip"></i> ';
  email.addEventListener("click", () => {
    email.setAttribute("contentEditable", true);
    email.focus();
  });
  // email.append(editButton);
  emailSec.append(email);
  emailSec.insertBefore(email, emailSec.firstChild);
  emailInput.value = "";
};
//
//

//
// const researchedSelectList = () => {
//   applicationNumber++;
//   let researched = document.createElement("select");
//   let optionValues = ["Select Value", "YES", "NO"];
//   researched.name = "option1";
//   researched.id = "select1";

//   const options = optionValues.map((values) => {
//     const selectOptions = values.toLocaleLowerCase();
//     return `<option value="${selectOptions}">${values}</option>`;
//   });
//   researchedDropDown.value === optionValues[1] || optionValues[2]
//     ? (researched.innerHTML = researchedDropDown.value)
//     : (researched.innerHTML = optionValues[0]);
//   researched.innerHTML = options;
//   researchedSec.appendChild(researched);
//   researchedSec.insertBefore(researched, researchedSec.firstChild);
// };
//
//

//
//

const researchedSelectList = () => {
  applicationNumber++;
  let researched = document.createElement("select");
  let optionValues = ["Select Value", "YES", "NO"];
  researched.name = "option1";
  researched.id = "select1";
  const options = optionValues.map((values) => {
    const selectOptions = values.toLocaleLowerCase();
    return `<option value="${selectOptions}">${values}</option>`;
  });
  researched.innerHTML = options;
  researchedSec.appendChild(researched);
  researchedSec.insertBefore(researched, researchedSec.firstChild);
};
//
//
const followUpEmail = () => {
  applicationNumber++;
  let followUp = document.createElement("select");
  let optionValues = ["Select Value", "YES", "NO"];
  followUp.name = "option2";
  followUp.id = "select2";
  const options = optionValues.map((values) => {
    const selectOptions = values.toLocaleLowerCase();
    return `<option value="${selectOptions}">${values}</option>`;
  });

  followUp.innerHTML = options;
  followUpSec.appendChild(followUp);
  followUpSec.insertBefore(followUp, followUpSec.firstChild);
};
//
//calls functions to append when clicked
addJobBtn.onclick = () => {
  dateAppliedSection();
  companyNameSection();
  companyUrlSection();
  jobBoardSection();
  contactSection();
  emailSection();
  researchedSelectList();
  followUpEmail();
  saveToLocalStorage();
};
//
//
////////////////LOCAL STORAGE SECTION////////

//Job listings in localStorage
const dateAppliedFromLS = () => {
  jobListingStorage.forEach((jobListing) => {
    const { date } = jobListing;
    const dateApplied = document.createElement("input");
    dateApplied.setAttribute("type", "date");
    dateApplied.classList.add(`dateApplied`);
    dateApplied.value = date;
    //check box
    const checkBox = document.createElement("input");
    checkBox.classList.add(`checkbox-list`);
    checkBox.setAttribute("type", "checkbox");
    // //edit button
    // const editButton = document.createElement("button");
    // editButton.classList.add("editButton");
    // editButton.innerHTML = '<i class="fas fa-paperclip"></i> ';
    dateApplied.addEventListener("click", () => {
      dateApplied.setAttribute("contentEditable", true);
      dateApplied.focus();
    });
    dateApplied.append(checkBox);
    applyDateSec.append(dateApplied);
    applyDateSec.insertBefore(dateApplied, applyDateSec.firstChild);
  });
};

const companyNameFromLS = () => {
  jobListingStorage.forEach((jobListing) => {
    const { businessName } = jobListing;
    const companyName = document.createElement("li");
    companyName.classList.add(`companyName`);
    companyName.innerHTML = businessName;
    //edit button
    // const editButton = document.createElement("button");
    // editButton.classList.add("editButton");
    // editButton.innerHTML = '<i class="fas fa-paperclip"></i> ';
    companyName.addEventListener("click", () => {
      companyName.setAttribute("contentEditable", true);
      companyName.focus();
    });
    // companyName.append(editButton);
    companyNameSec.append(companyName);
    companyNameSec.insertBefore(companyName, companyNameSec.firstChild);
  });
};
const companyUrlFromLS = () => {
  jobListingStorage.forEach((jobListing) => {
    const { companyUrl } = jobListing;
    const companyWebsite = document.createElement("li");
    companyWebsite.classList.add(`companyWebsite`);
    companyWebsite.innerHTML = companyUrl;
    // //edit button
    // const editButton = document.createElement("button");
    // editButton.classList.add("editButton");
    // editButton.innerHTML = '<i class="fas fa-paperclip"></i> ';
    companyWebsite.addEventListener("click", () => {
      companyWebsite.setAttribute("contentEditable", true);
      companyWebsite.focus();
    });
    // companyWebsite.append(editButton);
    companyWebsiteSec.append(companyWebsite);
    companyWebsiteSec.insertBefore(
      companyWebsite,
      companyWebsiteSec.firstChild
    );
  });
};
const companyJobBoardFromLS = () => {
  jobListingStorage.forEach((jobListing) => {
    const { JobBoard } = jobListing;
    const jobBoard = document.createElement("li");
    jobBoard.classList.add(`jobBoard`);
    jobBoard.innerHTML = JobBoard;
    // //edit button
    // const editButton = document.createElement("button");
    // editButton.classList.add("editButton");
    // editButton.innerHTML = '<i class="fas fa-paperclip"></i> ';
    jobBoard.addEventListener("click", () => {
      jobBoard.setAttribute("contentEditable", true);
      jobBoard.focus();
    });
    // jobBoard.append(editButton);
    jobBoardSec.append(jobBoard);
    jobBoardSec.insertBefore(jobBoard, jobBoardSec.firstChild);
    jobBoardInput.value = "";
  });
};

const companyContactFromLS = () => {
  jobListingStorage.forEach((jobListing) => {
    const { Contact } = jobListing;
    const contact = document.createElement("li");
    contact.classList.add(`Contact`);
    contact.innerHTML = Contact;
    //edit button
    // const editButton = document.createElement("button");
    // editButton.classList.add("editButton");
    // editButton.innerHTML = '<i class="fas fa-paperclip"></i> ';
    contact.addEventListener("click", () => {
      contact.setAttribute("contentEditable", true);
      contact.focus();
    });
    // contact.append(editButton);
    contactSec.append(contact);
    contactSec.insertBefore(contact, contactSec.firstChild);
    contactInput.value = "";
  });
};

const companyEmailFromLS = () => {
  jobListingStorage.forEach((jobListing) => {
    const { companyEmail } = jobListing;
    const email = document.createElement("li");
    email.classList.add(`Email`);
    email.innerHTML = companyEmail;
    // email.innerHTML = "email Name";
    // //edit button
    // const editButton = document.createElement("button");
    // editButton.classList.add("editButton");
    // editButton.innerHTML = '<i class="fas fa-paperclip"></i> ';
    email.addEventListener("click", () => {
      email.setAttribute("contentEditable", true);
      email.focus();
    });
    // email.append(editButton);
    emailSec.append(email);
    emailSec.insertBefore(email, emailSec.firstChild);
    emailInput.value = "";
  });
};
//fetches local storage items
// buildJobListings();
const fetchJobListings = () => {
  if (localStorage.getItem("jobListingStorage")) {
    jobListingStorage = JSON.parse(localStorage.getItem("jobListingStorage"));
  }
  companyNameFromLS();
  companyNameFromLS();
  companyUrlFromLS();
  companyJobBoardFromLS();
  companyContactFromLS();
  companyEmailFromLS();
  dateAppliedFromLS();
};

fetchJobListings();

//stores all items to local storage
const saveToLocalStorage = () => {
  let dateValue = dateSelected.value;
  let companyName = companyNameInput.value;
  let companyURL = companyURLInput.value;
  let jobBoard = jobBoardInput.value;
  let contactName = contactInput.value;
  let email = emailInput.value;
  let researchValue = researchedDropDown.value;
  let followUpValue = applicationNumber.value;

  const jobListingValues = {
    date: dateValue,
    businessName: companyName,
    url: companyURL,
    jobboard: jobBoard,
    contactname: contactName,
    email: email,
    research: researchValue,
    followUpValue: followUpValue,
  };
  jobListingStorage.push(jobListingValues);
  console.log(jobListingStorage);
  localStorage.setItem("jobListingStorage", JSON.stringify(jobListingStorage));
};

////////////////LOCAL STORAGE SECTION////////
