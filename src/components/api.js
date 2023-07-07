import { createClient } from 'pexels';
import { useEffect, useState } from 'react';
import Masonry from "react-masonry-css";
import { SlHeart } from "react-icons/sl"
import { BsBookmarks } from "react-icons/bs"
import { BiDownload } from "react-icons/bi"

import "../styles/api.css"
export default function Client( ){
const client = createClient('DnS6kIU35UjI6H608t9wBb6HN8ro2GFvK9msrGG0RoP97FdYHE07x4wC');
const query = 'Nature';
const [data,setData] = useState({photos:[]})
const [page,setPage] = useState(1)


useEffect(()=>{
    client.photos.search({ query, per_page:80,page}).then(res => {
        console.log(res);
        setData({photos:[...data.photos,...res.photos]})
    });
    
},[page])


return(
    <>
    <Masonry
  breakpointCols={3}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"
  columns={3}
  >
        {
        data&& data.photos.map((e)=>{
                return(
                    <div className='love'>
                        <BsBookmarks className='collect'/>
                        <SlHeart className='heart'/>
                        <img src={e.src.original} />
                        <BiDownload className='download'/>
                    </div>
                )
            })
        }
  </Masonry>
  <div className='load'>
    <button  onClick={()=>setPage(page+1)}>Load More</button>
  </div>

  </>
)
}

