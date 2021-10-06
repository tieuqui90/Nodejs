import express,{Request,Response} from 'express';
import {ILoginIput,ILogingResponse} from '../interfaces/auth';

const route = express.Router();

/**
url:/api/auth/login
method:POst
params:
    +username:string(required)
    +password:string(required)
status:200 |404|400|500
response:{
    success:true|false
    token:string
    error:{
        message:string|null
    }
}
 */


route.post('/login',(req:Request<ILoginIput>,res:Response<ILogingResponse>)=>{
    const {username,password} = req.body;
    console.log('username',username);
    console.log('password', password);
    return res.status(200).json({
        success:true,
        token:""
    });
});
export default route;

