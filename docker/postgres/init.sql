CREATE TYPE "user_role" AS ENUM (
  'admin',
  'course_coordinator',
  'user'
);

CREATE TABLE "users" (
                         "id" SERIAL PRIMARY KEY,
                         "first_name" varchar[40],
                         "email" varchar[40],
                         "password" varchar,
                         "bio_desc" varchar[56],
                         "avatar" varchar[40],
                         "role" user_role,
                         "active" bool,
                         "confirm" bool,
                         "email_verified_at" timestamp,
                         "updated_at" timestamp,
                         "deleted_at" timestamp,
                         "created_at" timestamp
);

CREATE TABLE "enrollment" (
                              "id" SERIAL PRIMARY KEY,
                              "user_id" int,
                              "course_id" int,
                              "enrollment_date" timestamp,
                              "deleted_at" timestamp
);

CREATE TABLE "learning_progress" (
                                     "id" SERIAL PRIMARY KEY,
                                     "enrollment_id" int,
                                     "card_id" int,
                                     "begin" timestamp,
                                     "completion" timestamp,
                                     "status" bool
);

CREATE TABLE "courses" (
                           "id" SERIAL PRIMARY KEY,
                           "created_by" int,
                           "name" varchar,
                           "description" varchar,
                           "approved" bool,
                           "created_at" timestamp,
                           "updated_at" timestamp,
                           "deleted_at" timestamp
);

CREATE TABLE "modules" (
                           "id" SERIAL PRIMARY KEY,
                           "course_id" int,
                           "name" varchar,
                           "description" varchar,
                           "order" numeric,
                           "created_at" timestamp,
                           "updated_at" timestamp,
                           "deleted_at" timestamp
);

CREATE TABLE "cards" (
                         "id" SERIAL PRIMARY KEY,
                         "module_id" int,
                         "name" varchar,
                         "description" varchar,
                         "content" text,
                         "media_link" varchar[40],
                         "order" numeric,
                         "duration_in_sec" numeric,
                         "is_open_for_free" bool,
                         "created_at" timestamp,
                         "updated_at" timestamp,
                         "deleted_at" timestamp
);

ALTER TABLE "enrollment" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "enrollment" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("id");

ALTER TABLE "learning_progress" ADD FOREIGN KEY ("enrollment_id") REFERENCES "enrollment" ("id");

ALTER TABLE "learning_progress" ADD FOREIGN KEY ("card_id") REFERENCES "cards" ("id");

ALTER TABLE "courses" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "modules" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("id");

ALTER TABLE "cards" ADD FOREIGN KEY ("module_id") REFERENCES "modules" ("id");

COMMIT;