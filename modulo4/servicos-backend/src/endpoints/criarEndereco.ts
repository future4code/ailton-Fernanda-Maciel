import axios from "axios";
import { request, Request, response, Response } from "express";
import { inserirUsuario } from "../data/inserirUsuario";
import { requisicao } from "../services/requisicao";
import { usuario } from "../types/usuario";

export async function criarEndereco(req: Request, res: Response) {
  try {
    const cep = req.params.cep;

    if (!cep) {
      throw new Error("Cep não foi passado");
    }

    const consultaCep = await requisicao(cep);

    if (!consultaCep) {
      throw new Error(`não foi possivel localizar o cep -> ${cep}`);
    }

    const usuarioCadastro: usuario = {
      bairro: consultaCep.bairro,
      cidade: consultaCep.localidade,
      estado: consultaCep.uf,
      logradouro: consultaCep.logradouro,
    };
    console.log(usuarioCadastro);

    await inserirUsuario(usuarioCadastro);
    res.status(201).send("pessoa cadastrada com sucesso.");
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
}
