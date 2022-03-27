import React from 'react';
import history from '../../history';
import './Home.css';

function Home(){
    return(
        <div className="Home-main">
                <h1>This is Home Page</h1>
                <button onClick={()=> history.push('/posts')} className="Home-button">View Posts</button>
        </div>
    );
}
export default Home;