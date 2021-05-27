var preloader = {
  addTo(container) {
    const loader = document.createElement("div");
    loader.className = "preloader";
    loader.innerHTML =
      '<svg id="circle" viewBox="25 25 50 50"><circle class="stroke" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg>';
    container.appendChild(loader);
  },
  removeFrom(container) {
    const loader = container.querySelector(".preloader");
    container.removeChild(loader);
  },
};
