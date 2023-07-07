import fetch from './serviceBook';

const listBooksEl = document.querySelector('.js-list-books');
const defaultImg="./"

async function addLocalStoredge(data) {
  localStorage.setItem('shopingBooks', JSON.stringify(await data()));
}
addLocalStoredge(fetch);

const books = JSON.parse(localStorage.getItem('shopingBooks'));
console.log('books', books);
// books??

function isEpty() {
        return `<p>This page is empty, add some books and proceed to order.</p><img src="" alt="${title}" />`;
    }
    
function marcupListBooks(arr) {
  return arr
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
                      return name === 'Amazon';
                    })[0].url
                  })
)
                  }">Amazon</a><a href="${
                    buy_links.filter(({ name }) => {
                      return name === 'Apple Books';
                    })[0].url
                  }">Apple Books</a><a href="${
        buy_links.filter(({ name }) => {
          return name === 'Bookshop';
        })[0].url
      }">Bookshop</a>

                </div>
              </div>
            </div>
            <button></button>
          </li>
`
    )
    .join('');
}
// console.log(marcupListBooks(books));

listBooksEl.innerHTML = marcupListBooks(books);
