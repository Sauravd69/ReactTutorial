import React from 'react';
import Get from'./Get'
import './Products.css';

function Posts(){
    return(
        <div className="Products-main">
            <h1>All Posts</h1>
            <Get/>
        </div>
    );

}
export default Posts;