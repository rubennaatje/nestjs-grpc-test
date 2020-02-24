import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { Note } from '../models/interfaces/note';
import { ClientGrpc, Client, Transport } from '@nestjs/microservices';
import { join } from 'path';


@Injectable()
export class NotesService implements OnModuleInit {
    @Client({
        transport: Transport.GRPC,
        options: {
          package: 'notess',
          url: 'localhost:50051',
          protoPath: join(__dirname, './notes.proto'),
        },
      })
      client: ClientGrpc;

    private noteService: any;

    onModuleInit() {
        this.noteService = this.client.getService('NoteService');
    }

    async create(note: Note){
        return await this.noteService.insert(note);
    }

    async findAll(): Promise<Note[]> {
        return await this.noteService.list({});
    }

    async update(note: Note){
        return await this.noteService.update(note);
    }

    async get(id: string){
        return await this.noteService.get({id: id});
    }

    async delete(id: string){
        return await this.noteService.delete({id: id});
    }
}
