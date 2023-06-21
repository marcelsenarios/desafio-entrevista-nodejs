import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Veiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  marca: string;

  @Column({ length: 128 })
  modelo: string;

  @Column({ length: 32 })
  cor: string;

  @Column({ length: 16 })
  placa: string;

  @Column({ length: 32 })
  tipo: string;
}
