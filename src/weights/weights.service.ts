import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WeightsService {
  constructor(private prisma: PrismaService) {}
  async addWeight(userId: string, dto: { weight: string; date: string }) {
    const weight = await this.prisma.weight.create({
      data: {
        userId,
        weight: +dto.weight,
        date: new Date(dto.date),
      },
    });
    if (!weight) {
      throw new ForbiddenException('Ошибка');
    }

    return {
      message: 'Вес успешно добавлен',
      entry: weight,
    };
  }

  async getWeight(userId: string) {
    const weights = await this.prisma.weight.findMany({
      where: {
        userId,
      },
    });
    if (weights.length === 0) {
      throw new ForbiddenException('Ошибка');
    }
    return {
      message: 'Вес успешно получен',
      entries: weights,
    };
  }
}
