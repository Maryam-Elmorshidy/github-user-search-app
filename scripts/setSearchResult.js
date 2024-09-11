import { cardsElement } from "./elements.js";

export const setSearchResult = (data) => {
  let result = "";
  //   console.log(data);
  if (data?.length === 0) {
    result = "<p> No result found </p>";
  } else if (data === null) {
    result = "";
  } else if (data.length) {
    data.map((item) => {
      result += `
          <article class='card'>
              <img src="${item.avatar_url}" class="img">
              <a href="${item.html_url}" target="_blank">${item.login}</a>
  
          </article>
          `;
    });
  }

  cardsElement.innerHTML = result;
};
