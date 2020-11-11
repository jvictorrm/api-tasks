import {
    MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class CreateTasksTable1603281166521 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tasks',
            columns: [
                {
                    name: 'id',
                    type: 'INTEGER',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                }, {
                    name: 'title',
                    type: 'varchar',
                }, {
                    name: 'description',
                    type: 'varchar',
                    isNullable: true,
                }, {
                    name: 'is_done',
                    type: 'bool',
                },
                {
                    name: 'user_id',
                    type: 'INTEGER',
                },
                {
                    name: 'created_at',
                    type: 'datetime',
                }, {
                    name: 'updated_at',
                    type: 'datetime',
                },
            ],
        }));

        await queryRunner.createForeignKey(
            'tasks',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tasks');
    }
}
