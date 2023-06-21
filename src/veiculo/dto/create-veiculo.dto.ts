import { IsNotEmpty } from 'class-validator';

export class CreateVeiculoDto {
  @IsNotEmpty({
    message: 'Necessário informar a marca do veículo, não pode ser vazio',
  })
  marca: string;

  @IsNotEmpty({
    message: 'Necessário informar o modelo do veículo, não pode ser vazio',
  })
  modelo: string;

  @IsNotEmpty({
    message: 'Necessário informar a cor do veículo, não pode ser vazio',
  })
  cor: string;

  @IsNotEmpty({
    message: 'Necessário informar a placa do veículo, não pode ser vazio',
  })
  placa: string;

  @IsNotEmpty({
    message: 'Necessário informar o tipo do veículo, não pode ser vazio',
  })
  tipo: string;
}
