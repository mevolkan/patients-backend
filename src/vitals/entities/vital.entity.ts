import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Patient } from 'src/patients/entities/patient.entity';

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

  @ManyToOne(() => Patient, (patient) => patient.vitals)
  patient: Patient;
}
