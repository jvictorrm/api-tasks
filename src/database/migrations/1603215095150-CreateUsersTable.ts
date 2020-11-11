import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1603215095150 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [{
                name: 'id',
                type: 'INTEGER',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            }, {
                name: 'email',
                type: 'varchar',
                isUnique: true,
            }, {
                name: 'password',
                type: 'varchar',
            },
            {
                name: 'created_at',
                type: 'datetime',
            }, {
                name: 'updated_at',
                type: 'datetime',
            }],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
