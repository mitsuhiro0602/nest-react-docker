import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { CommonModule } from 'src/common/common.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    forwardRef( () => UserModule),
    CommonModule
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
