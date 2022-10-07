import * as path from "path";

const fs = require("fs");

export class FileSystem {
  //******************************************************/
  //*****   MÉTODO DE IMPORTAÇÃO DE ARQUIVO EXTERNO   *****
  //******************************************************/

  readFileJson(file: any) {
    try {
      let content = fs.readFileSync(file, "utf-8");
      return JSON.parse(content);
    } catch (error: any) {
      console.log("Erro ao carregar o arquivo.");
    }
  }
}
