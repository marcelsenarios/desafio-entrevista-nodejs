import { Module } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { VeiculoController } from './veiculo.controller';
import { veiculoProviders } from './veiculo.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [VeiculoController],
  providers: [...veiculoProviders, VeiculoService]
})
export class VeiculoModule {}
