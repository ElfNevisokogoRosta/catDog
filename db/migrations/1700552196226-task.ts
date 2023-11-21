import { MigrationInterface, QueryRunner } from "typeorm";

export class Task1700552196226 implements MigrationInterface {
    name = 'Task1700552196226'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "dis" character varying NOT NULL, "list" character varying NOT NULL, "owner" integer NOT NULL, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
