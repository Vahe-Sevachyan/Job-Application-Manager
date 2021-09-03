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

let applicationNumber = 0;

// //wrapperDiv
// let jobListings = {};

const dateAppliedSection = () => {
  applicationNumber++;
  //dateApplied section
  const dateApplied = document.createElement("li");
  dateApplied.classList.add(`dateApplied`);
  dateApplied.innerHTML = "Enter Date";
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
  companyName.innerHTML = "....";
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
};
//
//
const companyWebsiteSection = () => {
  applicationNumber++;
  //Company Website
  const companyWebsite = document.createElement("li");
  companyWebsite.classList.add(`companyWebsite`);
  companyWebsite.innerHTML = "Enter URL";
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
};
//
//
const jobBoardSection = () => {
  applicationNumber++;
  // JobBoard section
  const jobBoard = document.createElement("li");
  jobBoard.classList.add(`jobBoard`);
  jobBoard.innerHTML = "Job Board Name";
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
};
//
//
const contactSection = () => {
  applicationNumber++;
  const contact = document.createElement("li");
  contact.classList.add(`Contact`);
  contact.innerHTML = "contact Name";
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
};
//
//
const emailSection = () => {
  applicationNumber++;
  const email = document.createElement("li");
  email.classList.add(`Email`);
  email.innerHTML = "email Name";
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
};
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
//
addJobBtn.onclick = () => {
  dateAppliedSection();
  companyNameSection();
  companyWebsiteSection();
  jobBoardSection();
  contactSection();
  emailSection();
  researchedSelectList();
  followUpEmail();
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const addJobListing = () => {
//   applicationNumber++;
//   // const jobListingUL = document.createElement("ul");
//   // jobListingUL.classList.add(`jobListing`);
//   // Checkbox;
//   //create edit button
//   const editButton = document.createElement("button");
//   editButton.classList.add("editButton");
//   editButton.innerHTML = '<i class="fas fa-paperclip"></i> ';
//   editButton.addEventListener("click", () => {
//     listItem.setAttribute("contentEditable", true);
//     listItem.focus();
//   });
//   //dateApplied section
//   const dateApplied = document.createElement("li");
//   dateApplied.classList.add(`dateApplied-${applicationNumber}`);
//   dateApplied.innerHTML = "data-1";
//   //companyName section
//   const companyName = document.createElement("li");
//   companyName.classList.add(`companyName-${applicationNumber}`);
//   companyName.innerHTML = "data-2";
//   //Company Website section add Edit icon
//   const companyWebsite = document.createElement("li");
//   companyWebsite.classList.add(`companyWebsite-${applicationNumber}`);
//   // JobBoard section add Edit icon
//   const jobBoard = document.createElement("li");
//   jobBoard.classList.add(`jobBoard-${applicationNumber}`);
//   //Contact section add Edit icon
//   const Contact = document.createElement("li");
//   Contact.classList.add(`Contact-${applicationNumber}`);
//   //Email section add Edit icon
//   const Email = document.createElement("li");
//   Email.classList.add(`Email-${applicationNumber}`);

//   dateApplied.append(checkBox);
//   applyDateSec.append(dateApplied);
//   companyName.append(editButton);
//   CompanyNameSec.append(companyName);
//   companyWebsiteSec.append(companyWebsite);
//   jobBoardSec.append(jobBoard);
//   ContactSec.append(Contact);
//   EmailSec.append(Email);

//   // jobListingUL.append(
//   //   checkBox,
//   //   dateApplied,
//   //   companyName,
//   //   companyWebsite,
//   //   jobBoard,
//   //   Contact,
//   //   Email
//   // );

//   applyDateSec.insertBefore(dateApplied, applyDateSec.firstChild);
//   CompanyNameSec.insertBefore(companyName, CompanyNameSec.firstChild);
//   companyWebsiteSec.insertBefore(companyWebsite, companyWebsiteSec.firstChild);
//   jobBoardSec.insertBefore(jobBoard, jobBoardSec.firstChild);
//   ContactSec.insertBefore(Contact, ContactSec.firstChild);
//   EmailSec.insertBefore(Email, EmailSec.firstChild);
//   applyDateSec.insertBefore(dateApplied, applyDateSec.firstChild);

//   // listContainer.insertBefore(jobListingUL, listContainer.firstChild);

//   const researchedSelectList = () => {
//     let researched = document.createElement("select");
//     let optionValues = ["Select Value", "YES", "NO"];
//     researched.name = "option1";
//     researched.id = "select1";
//     const options = optionValues.map((values) => {
//       const selectOptions = values.toLocaleLowerCase();
//       return `<option value="${selectOptions}">${values}</option>`;
//     });
//     researched.innerHTML = options;
//     researchedSec.appendChild(researched);
//     researchedSec.insertBefore(researched, researchedSec.firstChild);
//   };
//   const followUpEmail = () => {
//     let followUp = document.createElement("select");
//     let optionValues = ["Select Value", "YES", "NO"];
//     followUp.name = "option2";
//     followUp.id = "select2";
//     const options = optionValues.map((values) => {
//       const selectOptions = values.toLocaleLowerCase();
//       return `<option value="${selectOptions}">${values}</option>`;
//     });
//     followUp.innerHTML = options;
//     followUpSec.appendChild(followUp);
//     followUpSec.insertBefore(followUp, followUpSec.firstChild);
//   };
//   followUpEmail();
//   researchedSelectList();
// };
// addJobBtn.addEventListener("click", addJobListing);
//
//
//
//
//
//
//
//
//
//
//
//

// dateApplied.appendChild(editButton);
// companyName.appendChild(editButton);
// companyWebsite.appendChild(editButton);
// jobBoard.appendChild(editButton);
// Contact.appendChild(editButton);
// Email.appendChild(editButton);
// const sectionNames = [
//   dateApplied,
//   companyName,
//   companyWebsite,
//   jobBoard,
//   Contact,
//   Email,
// ];
// sectionNames.forEach((sectionName) => {
//   sectionName.append(editButton);
// });

// researchedSelectList();
// const followUpEmail = () => {
//   let optionValues = ["YES", "NO"];
//   let followUpList = document.createElement("select");
//   followUpList.id = "mySelect";
//   jobListingDiv.appendChild(followUpList);
//   optionValues.forEach(value, () => {
//     let option = document.createElement("option");
//     option.value = value;
//     option.text = value;
//     followUpList.appendChild(option);
//   });
// };
// followUpEmail();

// const storeJobs = () => {
//   const jobListings = {
//     name: companyName.value,
//   };
//   jobListings[companyName.value] = storeJobs;
//   localStorage.setItem("jobListings", JSON.stringify(jobListings));
// };
// storeJobs();
