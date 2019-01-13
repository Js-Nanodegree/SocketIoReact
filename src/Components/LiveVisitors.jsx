import React,{Component} from 'react';
 import {} from 'reactstrap'
 import axios from 'axios'

 class LiveVisitors extends Component{
    
    state={
        visitors:[]
    }

    componentWillMount(){
        axios.get('http://geoplugin.net/json.gp').then(res=>{
            const {
                geoplugin_request,
                geoplugin_countryCode,
                geoplugin_city,
                geoplugin_region,
                geoplugin_countryName

            }=res.data;

            const visitor={
                Ip: geoplugin_request,
                CountryCode:  geoplugin_countryCode,
                City:  geoplugin_city,
                State: geoplugin_region,
                Country:geoplugin_countryName
            }

            this.setState({
                visitors:[visitor]
            })
        })
    }
    
    
    
    renderTableBody =()=> {
        const {visitors}  = this.state;
        return visitors.map((v,index) => {return(
            <tr>
                <td>{index+1}</td>
                <td>{v.Ip}</td>
                <td>{v.CountryCode}</td>
                <td>{v.City}</td>
                <td>{v.State}</td>
                <td>{v.Country}</td>
            </tr>
        )})
    }
    
    render(){
         return(
             <React.Fragment>
                 
                 <table>
                 
                     <thead>
                     <h2>Live Visitors</h2>
                        <tr>
                            <th>#</th>
                            <th>IP</th>
                            <th>CountryCode</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                        </tr>
                     </thead>
                     <tbody>
                         {this.renderTableBody()}
                     </tbody>
                 </table>
             </React.Fragment>
         )
     }
 }

 export default LiveVisitors