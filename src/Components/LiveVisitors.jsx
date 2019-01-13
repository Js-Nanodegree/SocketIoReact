import React,{Component} from 'react';
 import {} from 'reactstrap'

 class LiveVisitors extends Component{
    state= {visitors:[
        {
            ip:'localhost',
            city:'Lahore',
            state:'phenian',
            country:'Pakistan'
        }
    ]} 
    
    renderTableBody =()=> {
        const {visitors}  = this.state;
        return visitors.map(v => {return(
            <tr>
                <td>{v.ip}</td>
                <td>{v.city}</td>
                <td>{v.country}</td>
                <td>{v.state}</td>
            </tr>
        )})
    }
    
    
    
    
    
    
    render(){
         return(
             <React.Fragment>
                 <h2>Live Visitors</h2>
                 <table>
                     <thead>

                     </thead>
                 </table>
             </React.Fragment>
         )
     }
 }

 export default LiveVisitors