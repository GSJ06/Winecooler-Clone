
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function myMenuFunction(x) {
    x.classList.toggle("change");
      $('.menu').toggle();
  }
  function mySearchFunction(x) {
    $('.searchForm').toggle();
}