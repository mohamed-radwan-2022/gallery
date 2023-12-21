// selection all elements
let filterItem = document.querySelector(".items");
let filterImg = document.querySelectorAll(".image");

window.onload = () => { //once window loaded
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      filterItem.querySelector(".active").classList.remove("active") // remove active class
      selectedItem.target.classList.add("active") // add avtive class
      let = filterName = selectedItem.target.getAttribute("data-name"); //get data-name value of selected item and store it in filter name
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name")
        if ((filterImges == filterName) || filterName == "all") {
          image.classList.add("show")
        } else {
          image.classList.add("hide")
          image.classList.remove("show")
        }
      })
    }
  }
}










