import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WeightsService {
  constructor(private prisma: PrismaService) {}
  async addWeight(userId: string, dto: { weight: string; date: string }) {
    const weigth = await this.prisma.weight.create({
      data: {
        userId,
        weight: +dto.weight,
        date: new Date(dto.date),
      },
    });
    if (!weigth) {
      throw new ForbiddenException('Ошибка');
    }

    return {
      message: 'Вес успешно добавлен',
      entry: weigth,
    };
  }
}
