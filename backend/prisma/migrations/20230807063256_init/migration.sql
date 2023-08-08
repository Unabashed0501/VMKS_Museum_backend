-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "writer" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageURL" TEXT,
    "time" TEXT,
    "title" TEXT NOT NULL,
    "headline" BOOLEAN NOT NULL,
    "content" TEXT NOT NULL,
    "userpic" TEXT,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
