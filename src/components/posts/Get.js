import React, { useEffect, useState } from 'react';
import MaterialTable, { Column } from "@material-table/core";

export default function Get() {
    const[posts,setPosts]=useState([])
    
    const columns = [
        { title: "ID", field: "id" },
        { title: "Title", field: "title" }
      ]

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then((result)=>{
          setPosts(result);
        }
      )
    },[])

    return (
        <div>
            <MaterialTable
                title="Posts"
                data={posts}
                columns={columns}
            />
        </div>
    )
}