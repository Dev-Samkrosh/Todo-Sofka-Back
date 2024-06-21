import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './schemas/usuario.schema';
import { Model } from 'mongoose';
import { hash, compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { RegistroDto } from './dto/registro.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Usuario.name)
    private usuarioModel: Model<Usuario>,
    private jwtService: JwtService,
  ) {}

  async registro(datosRegistro: RegistroDto): Promise<{ token: string }> {
    const { nombre, email, contrasena } = datosRegistro;

    const hashContrasena = await hash(contrasena, 10); //! 2nd parameter: salt value

    const usuario = await this.usuarioModel.create({
      nombre,
      email,
      contrasena: hashContrasena,
    });

    const token = this.jwtService.sign({ id: usuario._id });

    return { token };
  }

  async login(datosLogin: LoginDto): Promise<{ token: string }> {
    const { email, contrasena } = datosLogin;

    const usuario = await this.usuarioModel.findOne({ email });
    const laContrasenaCoincide = await compare(contrasena, usuario.contrasena);

    if (!usuario || !laContrasenaCoincide) {
      throw new UnauthorizedException('Email o contraseña invalida');
    }

    const token = this.jwtService.sign({ id: usuario._id });

    return { token };
  }
}
