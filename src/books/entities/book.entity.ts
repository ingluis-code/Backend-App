import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true
    })
    title: string;


}
