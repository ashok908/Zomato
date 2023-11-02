export function Single() 
{
    let name="Ashu";
    let email = "Ashu@gmail.com";   
    let phone = 1234566678; I      
    let gender = "Male";      
    let dob = "02/11/2023";
    return <>
    <div className="margin-20">
        <div className="margin-10"> 
        <label>Name:</label>
        <label>Ashu</label>
        </div>
        <div className="margin-10">    
        <label>Email:</label> 
        <label>Ashu@gmail.com</label>   
        </div>  
        <div className="margin-10">
        <label>Phone:</label>
        <label>1234566678</label>    
        </div>
        <div className="margin-10">   
        <label>Gender:</label>
        <label>Male</label>
        </div>
        <div className="margin-10">
        <label>DOB:</label>
        <label>02/11/2023</label>
        </div>
    </div>

   </>
}    

