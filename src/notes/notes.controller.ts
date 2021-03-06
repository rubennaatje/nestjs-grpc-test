import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from 'src/models/interfaces/note';
import { CreateNoteDto } from '../models/create-note-.dto';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService){}

    @Post()
    async create(@Body() createNoteDto: CreateNoteDto) {
        return this.notesService.create(createNoteDto);
    }

    @Get()
    async findall(): Promise<Note[]> {
        return this.notesService.findAll();
    }

    @Put()
    async update(@Body() updateNoteDto: CreateNoteDto): Promise<Note> {
        return this.notesService.update(updateNoteDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.notesService.delete(id);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Note> {
        return this.notesService.get(id);
    }
}
