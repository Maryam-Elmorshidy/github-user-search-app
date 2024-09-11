import { searchInput, UserInput, buttonElement } from "./scripts/elements.js";

import performSearch from "./scripts/performSearch.js";

buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
  performSearch(searchInput.value, UserInput.checked);
});
