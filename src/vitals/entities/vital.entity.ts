import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Patient } from 'src/patients/entities/patient.entity';

@Entity()
export class Vital {
  @PrimaryGeneratedColumn()
  vitalId: number;

  @Column({ type: 'date' })
  date: string;

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

  @Column()
  patientId: number;

  @ManyToOne(() => Patient, (patient) => patient.vitals)
  @JoinColumn({ name: 'patientId' })
  patient: Patient;
}
