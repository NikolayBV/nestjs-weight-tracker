import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  register(dto: {
    email: string;
    password: string;
    age: number;
    height: number;
  }) {
    return { message: 'Пользователь зарегистрирован' };
  }

  async login(dto: { email: string; password: string }) {
    const token = await this.getTokens('123', dto.email);
    return { accessToken: token.accessToken, refreshToken: token.refreshToken };
  }

  async getTokens(userId: string, email: string) {
    const payload = { sub: userId, email };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d',
      }),
    ]);

    return { accessToken, refreshToken };
  }
}
