import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"NhanVien2"})
class User extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable:false,length:50})
    code:string;

    @Column({name :"name",length:250})
    fullname:string;

    @Column({nullable:false,length:150})
    sale:string;

    @Column({nullable:false,length:150})
    password:string

    @Column({nullable:false,length:50})
    email:string

}

export default User;



