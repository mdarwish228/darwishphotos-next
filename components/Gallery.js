import React from 'react'

import Picture from './Picture';

function Gallery() {

    var pictures = [
        {
            "id": 1,
            "name": "1",
            "aspect": "aspect-[4/5]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        },
        {
            "id": 2,
            "name": "2",
            "aspect": "aspect-[5/4]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        },
        {
            "id": 3,
            "name": "3",
            "aspect": "aspect-[2/3]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        },
        {
            "id": 4,
            "name": "4",
            "aspect": "aspect-[3/2]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        },
        {
            "id": 5,
            "name": "5",
            "aspect":  "aspect-[16/9]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        },
        {
            "id": 6,
            "name": "6",
            "aspect": "aspect-[9/16]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        },
        {
            "id": 7,
            "name": "7",
            "aspect": "aspect-[4/5]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        },
        {
            "id": 8,
            "name": "8",
            "aspect": "aspect-[5/4]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        },
        {
            "id": 9,
            "name": "9",
            "aspect": "aspect-[2/3]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        },
        {
            "id": 10,
            "name": "10",
            "aspect": "aspect-[3/2]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        },
        {
            "id": 11,
            "name": "11",
            "aspect":  "aspect-[16/9]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        },
        {
            "id": 12,
            "name": "12",
            "aspect": "aspect-[9/16]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        },
        {
            "id": 13,
            "name": "13",
            "aspect": "aspect-[4/5]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        },
        {
            "id": 14,
            "name": "14",
            "aspect": "aspect-[5/4]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        },
        {
            "id": 15,
            "name": "15",
            "aspect": "aspect-[2/3]",
            "src": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
            "width": 1080,
            "height": 715
        }
    ]

    return (
        <div className='container mx-auto pb-3 pt-5 columns-2 md:columns-3 px-2 gap-2 justify-center items-center'>
            {
                pictures.map((picture) => {
                    var pictureWithDelay = <Picture key={picture.id} picture={picture} />

                    return pictureWithDelay
                })
            }
        </div>
    )
}

export default Gallery