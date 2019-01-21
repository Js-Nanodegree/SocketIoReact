import React from 'react'


export default class Sum extends React.Component{
    constructor(props) {
        super(props);        
        this.state= {
            isToggle:0,
            visitors:[{
    //провожу поиск по username при получении или сверке Salt отправляю с backend
    username: 'Robin Wieruch',
    idToken: '1',
    NameToken:'TheFundArkStart!',

    StateCreate:{
        User:'Yakimov V.A',
        TimeCreate:'461631635165416',
        SessionToken:'HashSession'    ,
        Salt:'131531513512536136',

        Root:{
            RootHash:'Hash Root Tooken',
            AccountInfo:'true',
            AccounHistory:'true',
            Order:'Hash_gdfajuilbnfhvuaifiulawefbebgfyuthjksvdfca',
            Wallets:'Hash_hjasdfghjasdfhsgdiuahfgidsahgfdisahbfdfbka',
            WithDraw:'Hash_ahdsufjiajasfdbhasigudfhbsiaulfdbhisaud',
        },
        //Record backend

        Revoke:{
            RevokeHash:'Hash_fjdsbhafgjghujiaosaabdfsfbsd',
            RevokeUrl:'/account/revoke_api/{TokenId}?tkt={RootHashid}&{HashRevoke}',
            RevokeMessage:'Permanently revoke and disable your key: {NameToken} ( ID: {IdToken}; Secret: {SecretKey_Fragment} )?',
        
        },

        //Record Backend получаю PubKey в запросе и hash в header и сверяю. TimeCreate+Salt = PrivKey
        Token:{
            PubKey:'Hash_fdsjaghsfdjgjsdugsjdfasfd' ,
            PrivKeyFragment:'Hash_gajkgnhjsa..........',
            TokenHash:'Hash_gfjsadgnhbjfsdgnjksdfnfdskjl',
        }
        }
    } 
]} 
                        }

                        renderTableBody =()=> {
            const {visitors}  = this.state;
            return visitors.map((v,index) => {return(
                <tr key={index} >
                    <td>{index+1}</td>
                    <td>{v.NameToken}</td>
                    <td>{v.idToken}</td>
                    <td>{v.StateCreate.Token.TokenHash}</td>
                    <td>{v.RootHash}</td>
                    <td>
                        <form method="post" action={v.TokenRevokeUrl}>
                            <input data-method="submit" data-message={v.TokenMessage} type="submit" value="Revoke"/>
                            <input type="hidden" name="authenticity_token" value={v.TokenRev}/>
                        </form>
                    </td>
                </tr>
            )})
        }

        MapiClick=()=> {
            this.setState({
                isToggle: null});
        }
    render(){
        

        return(<div>
                    <h1>Управление токенами Api</h1>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Название токена</td>
                                    <td>ID вашего токена</td>
                                    <td>Секретная подсказка</td>
                                    <td><button>Root</button></td>
                                    <td><button>Revoke</button></td>
                                </tr>
                                
                            </thead>
                            <tbody>
                               {this.renderTableBody()}
                            </tbody>
                        </table>
                    </div>
                        <div id='Root'>
                            <p>наследуюсь от таблицы</p>
                        </div>

                    <div id='Info'>
                        <div>
                            <p>статический текст</p>
                        </div>
                            <p>Измененный текст от Root</p>
                    </div>
                    
                    <div id='Revoke'>
                        <p>наследуюсь от таблицы</p>
                    </div>
                    
                </div>
                    )
    }
}