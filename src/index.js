import fetch from './serviceBook';

const listBooksEl = document.querySelector('js-list-books');

async function addLocalStoredge(data) {
  localStorage.setItem('shopingBooks', JSON.stringify(await data()));
}
addLocalStoredge(fetch);

const books = JSON.parse(localStorage.getItem('shopingBooks'));
console.log('books', books);
function marcupListBooks(arr) {
  arr
    .map(
      ({
        title,
        book_image,
        author,
        description,
        list_name,
        buy_links,
      }) => `<li>
            <div><img src="${book_image}" alt="${title}" /></div>
            <div>
              <div>
                <h3>${title}</h3>
                <h2>${list_name}</h2>
                <p>${description}</p>
              </div>
              <div>
                <span>${author}</span>
                <div>
                  <a href="${
                    buy_links.filter(({ name }) => {
                      name.toLowerCase() === 'amazon';
                    }).url
                  }">Amazon</a><a href="#"></a><a href="#"></a>
                </div>
              </div>
            </div>
            <button></button>
          </li>
`
    )
    .join('');
}

listBooksEl.innerHTML = marcupListBooks(books);
