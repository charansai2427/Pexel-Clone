import { createClient } from 'pexels';
import Masonry from "react-masonry-css";

export default function Client( ){
const client = createClient('DnS6kIU35UjI6H608t9wBb6HN8ro2GFvK9msrGG0RoP97FdYHE07x4wC');
const query = 'Nature';

client.photos.search({ query, per_page:500,page:8 }).then(photos => {console.log(photos)});

return(
    <Masonry
  breakpointCols={3}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
    <div>
        
    </div>
  </Masonry>
)
}
