import React, { Component } from 'react'




class Addlogin extends Component {
    
    render() {
        return (
            <div>
                
             <div class="card">
                
                 <div class="card-body">
          <h4 class="card-title"></h4>
                     <div class="card-text"><div className="form-group">
                 <label htmlfor="">Mail</label>
                 <input type="mail"  className="form-control"  placeholder="Name"/>
                 </div> 
                 <div className="form-group">
                 <label htmlfor="">password</label>
                 <input type="password" className="form-control"  placeholder="Mot de passe"  />
                 <label htmlfor="">show</label>
                 
             <input type="checkbox" onclick="myFunction()"/>
                 </div> 
                 
                     <button className="btn btn-success btn-block">submit</button>
                     
                   </div>
                 </div>
             </div>
               
            </div>
        )
    }
}


export default Addlogin;