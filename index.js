function addingEventListener() {
  const input = document.getElementById("input");
  function clickAlert() {
    alert("Browser input clicked(I was clicked)");
  }
  input.addEventListener("click", clickAlert());
}

// calling the addingEventListener function
addingEventListener();
