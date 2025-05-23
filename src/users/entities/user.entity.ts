/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  birthdayDate: Date;

  @Column()
  height: number;
}
