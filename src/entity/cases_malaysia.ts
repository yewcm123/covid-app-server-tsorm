import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"


@Entity('cases_malaysia')
export class cases_malaysia extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    deaths_new: number

    @Column()
    casesRecovered: number
}