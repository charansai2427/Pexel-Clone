
import { createClient } from 'pexels';

export default function Client( ){
const client = createClient('DnS6kIU35UjI6H608t9wBb6HN8ro2GFvK9msrGG0RoP97FdYHE07x4wC');
const query = 'Nature';

client.photos.search({ query, per_page: 500 }).then(photos => {console.log(photos)});

return(
    <div>

    </div>
)
}