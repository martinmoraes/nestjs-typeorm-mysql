import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrate1682009368525 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE api.users ADD COLUMN date_of_birth DATE NULL;',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE api.users DROP COLUMN date_of_birth;');
  }
}
