import { Vital } from 'src/vitals/entities/vital.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  patientId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'date' })
  dob: string;

  @Column()
  gender: string;

  @OneToMany(() => Vital, (vital) => vital.patient)
  vitals: Vital[];
}
