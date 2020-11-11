import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
    BeforeInsert,
    BeforeUpdate,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

import bcrypt from 'bcryptjs';
import Task from './Task';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;

    @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;

    // relations
    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[];
}

export default User;
