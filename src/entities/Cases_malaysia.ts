import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"



@Entity('cases_malaysia')
export class Cases_malaysia extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column({
        type: 'date'
    })
    date: string

    @Column({
        nullable:true
    })
    cases_new: number

    @Column({
        nullable:true
    })
    cases_death: number

    @Column({
        nullable:true
    })
    cases_recovered: number
}