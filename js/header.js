export function header() {
  const headerCheckbox = document.getElementById("header-checkbox");
  const headerLinks = document.getElementsByClassName("header-link");

  for (let i = 0; i < headerLinks.length; i++) {
    headerLinks[i].addEventListener(
      "click",
      () => {
        headerCheckbox.checked = false;
      },
      false
    );
  }
}
