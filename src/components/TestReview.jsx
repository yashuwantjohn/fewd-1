import React from "react";
function TestReview ({name , review}){
    return(
    <div style={{ padding:"20px", borderRadius:" 10px", maxWidth:" 300px", border :" 1px solid #ccc", boxShadow:" 0 4px 6px rgba(0,0,0,0.1)", backgroundColor:" #fff",color:"black"  }}>
        <h2> { name} </h2>
        <p> {review}</p>
    </div>
    );
}

export default TestReview ;