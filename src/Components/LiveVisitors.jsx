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
        return visitors.map((v,index) => {return(
            <tr>
                <td>{v.index+1}</td>
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
                        <tr>
                            <th>#</th>
                            <th>IP</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>State</th>
                        </tr>
                     </thead>
                     <tbody>
                         {this.renderTableBody}
                     </tbody>
                 </table>
             </React.Fragment>
         )
     }
 }

 export default LiveVisitors