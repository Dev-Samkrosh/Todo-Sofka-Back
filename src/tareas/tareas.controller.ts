import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TareasService } from './tareas.service';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Tarea } from 'src/tareas/schemas/tarea.schema';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('/tareas')
@ApiTags('Tareas')
export class TareasController {
  constructor(private tareasService: TareasService) {}

  @Get('/get')
  @UseGuards(AuthGuard())
  async getTareas(@Req() req): Promise<Tarea[]> {
    return this.tareasService.getTareas(req.user._id);
  }

  @Post('/create')
  @UseGuards(AuthGuard())
  async createTareas(
    @Body()
    datosTarea: CreateTareaDto,
    @Req() req,
  ): Promise<Tarea> {
    return this.tareasService.createTareas(datosTarea, req.user);
  }

  //!! Aún no he definido si es mejor trabajar con _id de mongodb

  @Put('/update/:id')
  @UseGuards(AuthGuard())
  async updateTareas(
    @Param('id') id: string,
    @Body() camposActualizados: UpdateTareaDto,
  ): Promise<Tarea> {
    return this.tareasService.updateTareas(id, camposActualizados);
  }

  @ApiOkResponse({
    description: 'Deleted Successfully',
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  @Delete('/delete/:id')
  @UseGuards(AuthGuard())
  async deleteTareas(@Param('id') id: string): Promise<Tarea> {
    return this.tareasService.deleteTareas(id);
  }
}
