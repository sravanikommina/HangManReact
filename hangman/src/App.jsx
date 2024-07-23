import React from "react";
import Button from "./components/button/Button";


function App() {
  return (
    <React.Fragment>
      <h1 className="font-semibold text-3xl">
        Click me 
        </h1>
        <Button text="primary" buttonType="submit" styleType="primary" onClickHandler={()=>console.log("primary button clicked")}
        />
      <Button text="secondary" buttonType="button" styleType="secondary" onClickHandler={() => console.log("secondary clicked")}/>
      <Button text="warning" buttonType="button" styleType="warning" onClickHandler={() => console.log("warning clicked")}/>
      <Button text="error" buttonType="button" styleType=" " onClickHandler={() => console.log("error clicked")}/>
      
      
      </React.Fragment>
    
      
   
    
  )
}


export default App;