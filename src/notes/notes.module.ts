import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { join } from 'path';

@Module({
    controllers: [NotesController],
    providers: [NotesService],
    exports: [NotesService]
})
export class NotesModule {}
