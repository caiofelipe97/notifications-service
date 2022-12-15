import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepositosiry } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepositosiry,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
