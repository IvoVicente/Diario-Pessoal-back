import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.registerAsync({
   imports: [ConfigModule],
   inject:  [ConfigService],
   useFactory: (configService: ConfigService) => ({
     secret: configService.get<string>('JWT_SECRET'),
     signOptions: {expiresIn: '1h'}
   })
 })

],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
