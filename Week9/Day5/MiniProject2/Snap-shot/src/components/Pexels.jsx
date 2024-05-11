import { createClient } from 'pexels';
const client = createClient('jCDFQq7in13FzoQxSbRlGLiynnWXGTE0AlV5Ff2N26qzt3jVz6hW1NL9');

const handleSearch = async(query) => {

   return client.photos.search({ query, per_page: 30 })
}
export default handleSearch;