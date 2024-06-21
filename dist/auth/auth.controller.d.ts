import { AuthService } from './auth.service';
import { RegistroDto } from './dto/registro.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registro(datosRegistro: RegistroDto): Promise<{
        token: string;
    }>;
    login(datosLogin: LoginDto): Promise<{
        token: string;
    }>;
}
