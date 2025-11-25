const express = require("express");
const { join } = require("path");
const { rotausuarios } = require("./controlers/usuario");
const { rotaregistros } = require("./controlers/registros");
const { rotaplaylists } = require("./controlers/playlistss");
const { rotaTabelamusical } = require("./controlers/tab_musica");

const server = express();

server.use(express.json());
server.use(express.static("assets"));
server.use(rotausuarios);
server.use(rotaregistros);
server.use(rotaplaylists);
server.use(rotaTabelamusical);

server.get("/", (req, res) => {
  res.sendFile(join(__dirname, "pages", "cadastro.html"));
});

server.get("/idade", (req, res) => {
  res.sendFile(join(__dirname, "pages", "idade.html"));
});

server.get("/historico-de-humor", (req, res) => {
  res.sendFile(join(__dirname, "pages", "historico-de-humor.html"));
});

server.get("/genero1", (req, res) => {
  res.sendFile(join(__dirname, "pages", "genero1.html"));
});

server.get("/emocao", (req, res) => {
  res.sendFile(join(__dirname, "pages", "emocao.html"));
});

server.get("/playlistshumor", (req, res) => {
  res.sendFile(join(__dirname, "pages", "playlistshumor.html"));
});

server.get("/tela-perfil", (req, res) => {
  res.sendFile(join(__dirname, "pages", "tela-perfil.html"));
});

server.get("/perfil", (req, res) => {
  res.sendFile(join(__dirname, "pages", "perfil.html"));
});

server.get("/login", (req, res) => {
  res.sendFile(join(__dirname, "pages", "login.html"));
});

server.get("/mudarnome", (req, res) => {
  res.sendFile(join(__dirname, "pages", "mudarnome.html"));
});

server.get("/pagina-sobre-o-aplic", (req, res) => {
  res.sendFile(join(__dirname, "pages", "pagina-sobre-o-aplic.html"));
});

server.get("/pagina-sobre-o-aplic", (req, res) => {
  res.sendFile(join(__dirname, "pages", "pagina-sobre-o-aplic.html"));
});

server.get("/notificacao", (req, res) => {
  res.sendFile(join(__dirname, "pages", "notificacao.html"));
});

server.get("/deletar", (req, res) => {
  res.sendFile(join(__dirname, "pages", "deletar.html"));
});

server.get("/config", (req, res) => {
  res.sendFile(join(__dirname, "pages", "config.html"));
});

server.get("/alterarsenha", (req, res) => {
  res.sendFile(join(__dirname, "pages", "aleterarsenha.html"));
});
server.get("/inicial", (req, res) => {
  res.sendFile(join(__dirname, "pages", "inicial.html"));
});
server.get("/inicialtriste", (req, res) => {
  res.sendFile(join(__dirname, "pages", "inicialtriste.html"));
});

server.listen(3001, () => console.log("> rodando"));
