function Ticket(){
    return(
      
         <div className="sectioneight">
          <form action="https://getform.io/f/pamqkkma" method="post">
              <div className="sectionnine">
                <h3 className="sectionten">CREATE YOUR TICKET</h3>
          <input type="text" placeholder="Enter your department name"className="sectionfour" name="department name"required></input> <br></br> <br></br>
          <input type="text" placeholder="Enter yout Batch Number" className="sectionfive" name="batch number"></input> <br></br> <br></br>
           <textarea placeholder="Enter your problem" className="sectionarea" name="write your problem"></textarea><br></br> <br></br>
     <select className="sectionseven" name="Rate your problem"> <br></br> <br></br>
             <option>Rate your problem</option><br></br> <br></br>
             <option>High</option>
             <option>Low</option>
             <option>Medium</option>
          </select> <br></br>  <br></br> 
           <select className="sectionagent" name="Select your agent">
            <option>Select your agent</option>
            <option>Agent 1 IT team</option>
            <option>Agent 2 cctv team</option>
            <option>Agent 3 Bav team</option>
            <option>Agent 4 Server team</option>
            <option>Agent 5 Security team</option>
           </select>
           <div className="sectionlabel">
            <label>Upload Image</label> <br></br>
            <input type="file" className="sectionfile" name="file"></input> <br></br> <br></br>
             </div>
  

           <button className="sectionsubmit" onClick={()=>{
            alert("Your Ticket is Submit")
           }}>Submit</button>
            </div>
             </form>
          
        </div>
    )
}

export default Ticket;