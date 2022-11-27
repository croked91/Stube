import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { VideoEntity } from "../video/video.entity";
import { UserEntity } from "./user.entity";
import { Base } from "../utils/base";

@Entity('Subscription')
export class SubscriptionEntity extends Base {

  @ManyToOne(() => UserEntity, user => user.subscriptions)
  @JoinColumn({ name: 'from_user_id' })
  fromUser: UserEntity

  @OneToMany(() => VideoEntity, video => video.user)
  @JoinColumn({ name: 'to_channel_id' })
  toChannel: UserEntity


}