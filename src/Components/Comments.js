import React from 'react'
import { useState ,useEffect} from 'react';
import { database } from '../firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import './Posts.css'

export default function Comments(props) {
    const {userData, postData} = props;
    const[comments,setComments]=useState(null)

    // useEffect(async()=>{
        // let arr = []
        // for(let i=0;i<postData.comments.length;i++){
        //     let data = await database.comments.doc(postData.comments[i]).get()
        //     arr.push(data.data())
        // }
        // setComments(arr)
    // },[postData])
    useEffect(() => {
        async function fetchData() {
            let arr = []
            for(let i=0;i<postData.comments.length;i++){
                let data = await database.comments.doc(postData.comments[i]).get()
                arr.push(data.data())
            }
            setComments(arr)
        }
        fetchData();
      }, [postData]);
  return (
    <div>
        {
            comments===null?<CircularProgress/>:
            <div className="posting">
            {
                 
                 comments.map((comment,index)=>(
                    <div style={{display:'flex'}} >
                        <Avatar  src={comment.uProfileImage}/>
                        <p>&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>{comment.uName}</span>&nbsp;&nbsp; {comment.text}</p>
                    </div>
                ))
                
            }
            </div>
        }
    </div>
  )
}
