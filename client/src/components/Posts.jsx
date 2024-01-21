import React, { useState } from 'react'

import Thumbnail1 from '../images/aesth.jpg'
import Thumbnail2 from '../images/cake.jpg'
import Thumbnail3 from '../images/roses.jpg'
import Thumbnail4 from '../images/aesth5.jpg'

import PostItem from './PostItem'

const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'Art',
        title: 'This is the title of the very first post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab facilis autem dolorum obcaecati id, quaerat ad magnam facere eius modi in excepturi rem beatae hic pariatur amet eveniet. Consequuntur.',
        authorID: 3
    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'Cake',
        title: 'This is the title of the very second post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab facilis autem dolorum obcaecati id, quaerat ad magnam facere eius modi in excepturi rem beatae hic pariatur amet eveniet. Consequuntur.',
        authorID: 1
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'Flowers',
        title: 'This is the title of the very third post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab facilis autem dolorum obcaecati id, quaerat ad magnam facere eius modi in excepturi rem beatae hic pariatur amet eveniet. Consequuntur.',
        authorID: 2
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'Art',
        title: 'This is the title of the very fourth post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab facilis autem dolorum obcaecati id, quaerat ad magnam facere eius modi in excepturi rem beatae hic pariatur amet eveniet. Consequuntur.',
        authorID: 4
    }
]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
    return (
        <section className="posts">
            <div className="container posts__container">
            {
                posts.map(({id, thumbnail, category, title, desc, authorID}) => 
                <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title}
                description={desc} authorID={authorID} />)
            }
            </div>
        </section>
    )
}

export default Posts
