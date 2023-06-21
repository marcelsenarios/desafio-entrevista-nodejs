import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';
import { VeiculoModule } from './veiculo/veiculo.module';

@Module({
  imports: [EmpresaModule, VeiculoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
