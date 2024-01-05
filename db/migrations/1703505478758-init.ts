import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1703505478758 implements MigrationInterface {
    name = 'Init1703505478758'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'user', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "dis" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subcategory" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "categoryId" integer, CONSTRAINT "PK_5ad0b82340b411f9463c8e9554d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "goods" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "dis" character varying NOT NULL, "rate" integer NOT NULL, "price" integer NOT NULL, "sales" boolean NOT NULL DEFAULT false, "discount" integer NOT NULL, "characteristic" jsonb NOT NULL, "categoryId" integer, "subcategoryId" integer, CONSTRAINT "PK_105e56546afe0823fa08df0baf7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "response_entity" ("id" SERIAL NOT NULL, "responce" character varying NOT NULL, "rate" integer NOT NULL, "userId" integer, "goodsId" integer, CONSTRAINT "PK_8d18745cb9b8a4b644db46241bf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subcategory" ADD CONSTRAINT "FK_3fc84b9483bdd736f728dbf95b2" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "goods" ADD CONSTRAINT "FK_80d3875c74b571373917021663b" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "goods" ADD CONSTRAINT "FK_d725159c1ca6288b2bf1c27cc20" FOREIGN KEY ("subcategoryId") REFERENCES "subcategory"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "response_entity" ADD CONSTRAINT "FK_61d8bb2f4c85d8d58aedb091836" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "response_entity" ADD CONSTRAINT "FK_959e529622767b1a55495864119" FOREIGN KEY ("goodsId") REFERENCES "goods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "response_entity" DROP CONSTRAINT "FK_959e529622767b1a55495864119"`);
        await queryRunner.query(`ALTER TABLE "response_entity" DROP CONSTRAINT "FK_61d8bb2f4c85d8d58aedb091836"`);
        await queryRunner.query(`ALTER TABLE "goods" DROP CONSTRAINT "FK_d725159c1ca6288b2bf1c27cc20"`);
        await queryRunner.query(`ALTER TABLE "goods" DROP CONSTRAINT "FK_80d3875c74b571373917021663b"`);
        await queryRunner.query(`ALTER TABLE "subcategory" DROP CONSTRAINT "FK_3fc84b9483bdd736f728dbf95b2"`);
        await queryRunner.query(`DROP TABLE "response_entity"`);
        await queryRunner.query(`DROP TABLE "goods"`);
        await queryRunner.query(`DROP TABLE "subcategory"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
