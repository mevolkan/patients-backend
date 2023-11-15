export class CreateVitalDto {
  readonly date: string;
  readonly height: string;
  readonly weight: string;
  readonly bmi: string;
  readonly generalHealth: string;
  readonly takingDrugs: boolean;
  readonly comments: string;
  readonly patientId: number;
}
