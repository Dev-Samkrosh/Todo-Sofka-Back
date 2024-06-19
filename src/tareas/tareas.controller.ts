import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TareasService } from './tareas.service';
import { CreateTareaDto, UpdateTareaDto } from './dto/tarea.dto';

@Controller('/tareas')
export class TareasController {
  constructor(private tareasService: TareasService) {}

  @Get('/get')
  getTareas() {
    return this.tareasService.getTareas();
  }

  @Post('/create')
  createTareas(@Body() datosTarea: CreateTareaDto) {
    return this.tareasService.createTareas(datosTarea);
  }

  @Patch('/update/:id')
  updateTareas(
    @Param('id') id: string,
    @Body() camposActualizados: UpdateTareaDto,
  ) {
    return this.tareasService.updateTareas(id, camposActualizados);
  }

  @Delete('/delete/:id')
  deleteTareas(@Param('id') id: string) {
    return this.tareasService.deleteTareas(id);
  }
}
