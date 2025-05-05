import { createClient } from 'pexels';
import { useEffect, useState } from 'react';
import Masonry from "react-masonry-css";
import { SlHeart } from "react-icons/sl"
import { BsBookmarks, BsCheckLg } from "react-icons/bs"
import { BiDownload } from "react-icons/bi"

import "../styles/api.css"
export default function Client({ query }) {

    const client = createClient('DnS6kIU35UjI6H608t9wBb6HN8ro2GFvK9msrGG0RoP97FdYHE07x4wC');
    const [data, setData] = useState({ photos: [] })
    const [check, setcheck] = useState("")
    const [page, setPage] = useState(1)
    const [sizes, setSizes] = useState();


    useEffect(() => {
        client.photos.search({ query, per_page: 80, page }).then(res => {
            console.log(res);
            // setData({photos:[...res.photos]})        this command line will be for which you are searching it will be displayed when you click on load more it displayed 2nd page after 1st page
            setData({ photos: [...data?.photos, ...res.photos] })          // this command line will bbe for which you are searching it will be displayed when you click on load more it displayed as infinity scroll down in single page it will be displayed all things
        });

    }, [page, query])

    const [show, setShow] = useState()

    return (
        <>
            <div className={show ? 'show' : 'block'}>
                < button onClick={() => setShow(false)} style={{ color: 'gray', marginRight: '0em' }}>X</button>
                <img src={check} alt="Preview" />

                <select className='mp' onChange={(e) => setSizes(e.target.value)}>

                    <option className='mg' value="original">Full</option>
                    <option className='mg' value='medium'>Medium</option>
                    <option className='mg' value='small'>Small</option>

                </select>
                <a href={sizes == "original" ? check.original : sizes == "medium" ? check.medium : sizes == "small" ? check.small : null} style={{ textDecoration: 'solid', color: 'black' }}>Click Me For Download</a>
            </div>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                columns={3}
            >
                {
                    data && data.photos.map((e) => {
                        // console.log(e.src );
                        return (
                            <>
                                <div className='love'>
                                    <BsBookmarks className='collect' />
                                    <SlHeart className='heart' />
                                    <img onClick={() => { setcheck(e.src.original); setShow(true) }} src={e.src.original} alt="Selected" />
                                    <BiDownload className='download' />

                                </div>

                            </>
                        )
                    })
                }
             
            </Masonry>
            <div className='load'>
                <button onClick={() => setPage(page + 1)}>Load More</button>
            </div>

        </>
    )

}

