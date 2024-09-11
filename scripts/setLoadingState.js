import { loaderElement } from "./elements";
import { setSearchResult } from "./setSearchResult";

export default function (loadingStata) {
  loaderElement.classList.toggle("hidden", !loadingStata);
  loadingStata && setSearchResult(null);
}
