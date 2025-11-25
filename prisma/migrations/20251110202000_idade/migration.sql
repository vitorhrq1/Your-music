/*
  Warnings:

  - You are about to drop the `Tab_musica` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Playlist_emocionalToTab_musica` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idade` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_Playlist_emocionalToTab_musica_B_index";

-- DropIndex
DROP INDEX "_Playlist_emocionalToTab_musica_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Tab_musica";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_Playlist_emocionalToTab_musica";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Tabelamusical" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "artista" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "links" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Playlist_emocionalToTabelamusical" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_Playlist_emocionalToTabelamusical_A_fkey" FOREIGN KEY ("A") REFERENCES "Playlist_emocional" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Playlist_emocionalToTabelamusical_B_fkey" FOREIGN KEY ("B") REFERENCES "Tabelamusical" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "palavra_chave" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "idade" INTEGER NOT NULL
);
INSERT INTO "new_Usuario" ("email", "id", "nome", "palavra_chave") SELECT "email", "id", "nome", "palavra_chave" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_Playlist_emocionalToTabelamusical_AB_unique" ON "_Playlist_emocionalToTabelamusical"("A", "B");

-- CreateIndex
CREATE INDEX "_Playlist_emocionalToTabelamusical_B_index" ON "_Playlist_emocionalToTabelamusical"("B");
