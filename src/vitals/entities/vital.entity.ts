import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vital {
  @PrimaryGeneratedColumn('uuid')
  vitalId: string;

  @Column()
  date: Date;

  @Column()
  height: string;

  @Column()
  weight: string;

  @Column()
  bmi: string;

  @Column()
  generalHealth: string;

  @Column()
  takingDrugs: boolean;

  @Column()
  comments: string;
}
