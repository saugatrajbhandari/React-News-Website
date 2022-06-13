import React, { useContext } from 'react'
import { AppContext } from './context';

const Stories = () => {
    const {hits, isLoading, removePost} = useContext(AppContext)
    // let isLoading = true;


    if (isLoading){
        return (
            <h1>Loading...</h1>
    
        )
    }
  return (
    <>
        <div className='stories-div'>
        {hits.map((curPost)=> {
            const {title, url, author, num_comments, objectID} = curPost;
            return(
    
            <div className="card" key={objectID}>
                <h2>{title}</h2>
                <p>
                    By <span>{author}</span> | <span>{num_comments} comments</span>
                </p>
                <div className="card-button">
                    <a href={url} target='_blank'>Read more</a>
                    <a href="" onClick={() => removePost(objectID)}>Remove</a>
                </div>
            </div>
    
            )
        })}
        </div>
    </>
  )
}

export default Stories