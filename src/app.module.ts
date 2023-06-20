import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';
import { VeiculosModule } from './veiculos/veiculos.module';

@Module({
  imports: [EmpresaModule, VeiculosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
