import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { DatabaseModule } from 'src/database/database.module';
import { empresaProviders } from './empresa.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [EmpresaController],
  providers: [...empresaProviders, EmpresaService,]
})
export class EmpresaModule {}

