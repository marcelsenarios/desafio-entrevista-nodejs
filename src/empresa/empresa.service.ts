import { Inject, Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmpresaService {

  constructor(
    @Inject('EMPRESA_REPOSITORY')
    private empresaRepository: Repository<Empresa>,
  ) {}

  create(createEmpresaDto: CreateEmpresaDto) {
    return this.empresaRepository.save(createEmpresaDto);
  }

  findAll() {
    return this.empresaRepository.find();
  }

  findOne(id: number) {
    return this.empresaRepository.findOne({ where: { id } });
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaRepository.update(id, updateEmpresaDto);
  }

  remove(id: number) {
    return this.empresaRepository.delete(id);
  }
}
