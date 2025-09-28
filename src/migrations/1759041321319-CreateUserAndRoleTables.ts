import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserAndRoleTables1759041321319 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create roles table
        await queryRunner.query(`
            CREATE TABLE "roles" (
                "id" uuid NOT NULL DEFAULT gen_random_uuid(),
                "name" character varying NOT NULL,
                "description" character varying,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"),
                CONSTRAINT "UQ_648e3f5447f725579d7d4ffdfb7" UNIQUE ("name")
            )
        `);

        // Create users table
        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" uuid NOT NULL DEFAULT gen_random_uuid(),
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                "firstName" character varying NOT NULL,
                "lastName" character varying NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"),
                CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")
            )
        `);

        // Create user_roles junction table
        await queryRunner.query(`
            CREATE TABLE "user_roles" (
                "user_id" uuid NOT NULL,
                "role_id" uuid NOT NULL,
                CONSTRAINT "PK_5f9286e6c25594c6b88c108db77" PRIMARY KEY ("user_id", "role_id")
            )
        `);

        // Create indexes
        await queryRunner.query(`CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles" ("user_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles" ("role_id")`);

        // Add foreign key constraints
        await queryRunner.query(`
            ALTER TABLE "user_roles"
            ADD CONSTRAINT "FK_5f9286e6c25594c6b88c108db77"
            FOREIGN KEY ("user_id") REFERENCES "users"("id")
            ON DELETE CASCADE ON UPDATE CASCADE
        `);

        await queryRunner.query(`
            ALTER TABLE "user_roles"
            ADD CONSTRAINT "FK_4be2f7adf862634f5f803d246b"
            FOREIGN KEY ("role_id") REFERENCES "roles"("id")
            ON DELETE CASCADE ON UPDATE CASCADE
        `);

        // Insert default roles
        await queryRunner.query(`
            INSERT INTO "roles" ("name", "description") VALUES
            ('admin', 'Administrator role with full access'),
            ('user', 'Regular user role'),
            ('moderator', 'Moderator role with limited admin access')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign key constraints
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_4be2f7adf862634f5f803d246b"`);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_5f9286e6c25594c6b88c108db77"`);

        // Drop indexes
        await queryRunner.query(`DROP INDEX "public"."IDX_4be2f7adf862634f5f803d246b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5f9286e6c25594c6b88c108db7"`);

        // Drop tables
        await queryRunner.query(`DROP TABLE "user_roles"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
