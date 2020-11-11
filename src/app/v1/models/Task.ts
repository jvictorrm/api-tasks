import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

import User from './User';

@Entity('tasks')
class Task {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column({ name: 'is_done', default: false })
    isDone: boolean;

    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;

    @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;

    // relations
    @ManyToOne(() => User, (user) => user.tasks)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user: User;
}

export default Task;
