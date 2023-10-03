//contact form
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


//pop up
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('cookiesPopup');
    const acceptButton = document.getElementById('acceptCookies');
    const declineButton = document.getElementById('declineCookies');
  
    acceptButton.addEventListener('click', function () {
      popup.classList.remove('show');
      // Perform actions for accepting cookies
    });
  
    declineButton.addEventListener('click', function () {
      popup.classList.remove('show');
      // Perform actions for declining cookies
    });
  
    setTimeout(function () {
      popup.classList.add('show');
    }, 2000); // Show the popup after 1 second (adjust as needed)
  });


  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });


//search bar 
  const searchInput = document.getElementById('searchInput');
const dataTableRows = document.querySelectorAll('.data-table tbody tr');

searchInput.addEventListener('keyup', function () {
  const filter = searchInput.value.toLowerCase();

  dataTableRows.forEach(row => {
    const rowText = row.textContent.toLowerCase();
    row.style.display = rowText.includes(filter) ? 'table-row' : 'none';
  });
});





//email sending
document.getElementById("emailButton").addEventListener("click", function() {
    const receiverEmail = "dailysunpharmacoltd@gmail.com";
    const subject = "(Your Subject Goes Here Einstein";
    const body = "Hello Dzily sun...";

    const mailtoLink = `mailto:${receiverEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});
