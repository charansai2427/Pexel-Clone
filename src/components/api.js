import { createClient } from 'pexels';
import { useState } from 'react';
import Masonry from "react-masonry-css";
import "../styles/api.css"
export default function Client( ){
const client = createClient('DnS6kIU35UjI6H608t9wBb6HN8ro2GFvK9msrGG0RoP97FdYHE07x4wC');
const query = 'Nature';
const [data,setData] = useState({photos:[]})

client.photos.search({ query, per_page:500,page:8 }).then(res => {
    console.log(res);
    setData({photos:res.photos})
});




return(
    <Masonry
  breakpointCols={3}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"
  columns={4}
  >
        {
        data&& data.photos.map((e)=>{
                return(
                    <div>
                        <img src={e.src.portrait}/>
                    </div>
                )
            })
        }
  </Masonry>
)
}
