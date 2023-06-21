import { PartialType } from '@nestjs/swagger';
import { CreateEmpresaDto } from './create-empresa.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateEmpresaDto extends PartialType(CreateEmpresaDto) {
  @IsNotEmpty({
    message: 'Necessário informar o nome da empresa, não pode ser vazio',
  })
  nome: string;

  @IsNotEmpty({
    message: 'Necessário informar o cnpj da empresa, não pode ser vazio',
  })
  cnpj: string;

  @IsNotEmpty({
    message: 'Necessário informar o endereço da empresa, não pode ser vazio',
  })
  endereco: string;

  @IsNotEmpty({
    message: 'Necessário informar o telefone da empresa, não pode ser vazio',
  })
  telefone: string;

  @IsNotEmpty({
    message:
      'Necessário informar a quantidade de vagas para motos, não pode ser vazio',
  })
  qtdVagasMoto: number;

  @IsNotEmpty({
    message:
      'Necessário informar a quantidade de vagas para carros, não pode ser vazio',
  })
  qtdVagasCarro: number;
}
