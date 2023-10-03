
//product pop up
const popupButton = document.getElementById('popupButton2');
const popup = document.getElementById('popup2');
const closePopup = document.getElementById('closePopup2');

popupButton.addEventListener('click', function () {
  popup.style.display = 'block';
});

closePopup.addEventListener('click', function () {
  popup.style.display = 'none';
});
