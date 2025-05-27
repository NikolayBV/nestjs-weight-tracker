import { Body, Controller, Param, Post } from '@nestjs/common';
import { WeightsService } from './weights.service';

@Controller('weights')
export class WeightsController {
  constructor(private readonly weightsService: WeightsService) {}
  @Post(':userId')
  async addWeight(
    @Param('userId') userId: string,
    @Body() dto: { weight: string; date: string },
  ) {
    return await this.weightsService.addWeight(userId, dto);
  }
}
