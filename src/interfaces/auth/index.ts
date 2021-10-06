export interface ILoginIput{
    username:string,
    password:string,

}
export interface ILogingResponse{
    success:true|false
    token?:string
    error?:{
        message:string|null
    }
}