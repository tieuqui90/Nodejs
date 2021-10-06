import path from "path";
console.log("env:",process.env.NODE_ENV);
require("dotenv").config({
    path: path.resolve(process.cwd(), '.env.development'),
});
import express, { json, urlencoded } from "express";
import cors from "cors";
import {createConnection } from "typeorm";

import auth from './routes/auth';
const connect = async():Promise<boolean>=>{
    try{
        await createConnection({
            type: "mssql",
            host: "rdp.icool.com.vn",
            port: 1434,
            username: "viethq",
            password: "123456",
            database: "icool_karaoke_v10",
            logging:true,
            synchronize:false
        });
        return true;
    }catch(err){
        return false;
    };   
    
}
connect()
    .then(()=>{
        console.log("Kết nối thành công");
        const app = express();
        app.use(json());//bằng json
        app.use(urlencoded({extended:true}));//bằng from
        app.use(cors({
            origin:["http://localhost:9000"],
            methods:["GET","POST", "PUT","DELETE"]
        }));

        app.use('/api/auth',auth);
        console.log('env', process.env.PORT);
        const port = process.env.PORT || 9093;
        app.listen(port,()=>{   
            console.log(`server dag lang nghe ${port}`);
        });
    })
    .catch(err => {
        console.log("Ket nơi that bai",err.messgas);
    })

