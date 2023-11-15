import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Patient } from 'src/patients/entities/patient.entity';

@Entity()
export class Vital {
  @PrimaryGeneratedColumn('uuid')
  vitalId: number;

  @Column()
  date: Date;

  @Column()
  height: string;

  @Column()
  weight: string;

  @Column()
  bmi: string;

  @Column({ nullable: true })
  generalHealth: string;

  @Column({ nullable: true })
  takingDrugs: boolean;

  @Column({ nullable: true })
  comments: string;

  @ManyToOne(() => Patient, (patient) => patient.vitals)
  patient: Patient;
}
