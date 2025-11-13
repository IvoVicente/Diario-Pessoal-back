import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';


@Controller('user')
export class UserController {


   constructor(private readonly userService: UserService){}


   @Post('registro')
   async create(@Body() createUserDto: UserDto){
       return this.userService.create(createUserDto);
   }

   @HttpCode(HttpStatus.OK)
   @Post('login')
   async login(@Body() loginDto:UserDto){
       return this.userService.login(loginDto);
   }

}
