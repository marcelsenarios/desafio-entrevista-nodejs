import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome: string;

  @Column({ length: 18 })
  cnpj: string;

  @Column({ length: 255 })
  endereco: string;

  @Column({ length: 11 })
  telefone: string;

  @Column()
  qtdVagasMoto: number;

  @Column()
  qtdVagasCarro: number;
}
