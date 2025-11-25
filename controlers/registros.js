const { Router } = require("express");
const { db } = require("../db");

const rotaregistros = Router();

rotaregistros.get("/registros", async (req, res) => {
  const registros = await db.registro_emocional.findMany();
  res.send(registros);
});

rotaregistros.post("/registros", async (req, res) => {
  try {
    const { emocoes, usuario_id } = req.body;
    const novo_registro = await db.registro_emocional.create({
      data: {
        emocoes,
        usuario_id,
      },
    });

    res
      .status(201)
      .json({ mensagem: "Registro criado com sucesso", id: novo_registro.id });
  } catch (err) {
    res.status(400).json({ mensagem: "Erro ao criar registro", erro: err });
  }
});

rotaregistros.put("/registros/:id", async (req, res) => {
  const { emocoes, usuario, usuario_id } = req.body;
  const { id } = req.params;
  const novo_registro = await db.registro_emocional.update({
    where: { id: Number(id) },
    data: {
      emocoes,
      usuario: {
        connect: {
          id: usuario_id,
        },
      },
    },
  });

  res.status(201).json({
    mensagem: "registros atualizado com sucesso",
    id: novo_registro.id,
  });
});

rotaregistros.delete("/registros/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const novo_registro = await db.registro_emocional.delete({
      where: { id: Number(id) },
    });

    res.status(201).json({
      mensagem: "registros deletado com sucesso",
      id: novo_registro.id,
    });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ mensagem: "Erro ao deletar o registros", erro: err });
  }
});
module.exports = { rotaregistros };
