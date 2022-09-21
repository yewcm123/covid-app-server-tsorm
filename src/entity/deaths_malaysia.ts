import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"



@Entity('deaths_malaysia')
export class deaths_malaysia extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column({
        type: 'date'
    })
    date: string

    @Column()
    deaths_new: number

}