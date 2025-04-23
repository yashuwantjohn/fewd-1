import React from "react";
import TestReview from "./components/TestReview";
 function App() {
  return(
    <div style={{ display:"flex",flexWrap:"wrap",gap:"10px",padding:"40px",justifyContent:"centre"}}>
      <TestReview name=" Emily Watson" review="This service was amazing! Highly recommended"></TestReview>
      <TestReview name="neil amstrong " review=" moon was a good therapy"></TestReview>
    </div>
  );
 } 

 export default App;