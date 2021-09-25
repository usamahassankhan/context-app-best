import React,{useContext} from 'react'
import {AuthContext} from '../authContext';

const Component1 = () => {
    const {setToken,token}= useContext(AuthContext);
    return (
        <div>
            component1
            {token}
            <button onClick={()=>setToken("wao")}> click</button>
        </div>
    )
}

export default Component1
