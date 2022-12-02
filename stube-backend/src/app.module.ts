import { getTypeOrmConfig } from './config/typeorm.config'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { CommentModule } from './comment/comment.module'
import { VideoModule } from './video/video.module'
import { MediaModule } from './media/media.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getTypeOrmConfig,
			inject: [ConfigService]
		}),
		AuthModule,
		UserModule,
		CommentModule,
		VideoModule,
		MediaModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
