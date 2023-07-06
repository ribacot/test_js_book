import axios from "axios";

export default async function () {
    const res = await axios(
      'https://books-backend.p.goit.global/books/top-books'
    );
    console.log(res.data);
    return res.data
}