import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistroDto } from './dto/registro.dto';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Usuario')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/registro')
  registro(@Body() datosRegistro: RegistroDto) {
    return this.authService.registro(datosRegistro);
  }

  @Post('/login')
  login(@Body() datosLogin: LoginDto) {
    return this.authService.login(datosLogin);
  }
}
