import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [
    { equipe: 2, codigo: 7, apelido: 'HILTON S.', campanha: 0, cupons: 36 },
    { equipe: 2, codigo: 8, apelido: 'DANIEL S.', campanha: 0, cupons: 25 },
    { equipe: 2, codigo: 11, apelido: 'THIAGO S.', campanha: 0, cupons: 48 },
    { equipe: 2, codigo: 19, apelido: 'ISRAEL S.', campanha: 0, cupons: 103 },
    { equipe: 3, codigo: 26, apelido: 'ALEX J.', campanha: 0, cupons: 46 },
    { equipe: 1, codigo: 27, apelido: 'KAREN E.', campanha: 0, cupons: 33 },
    { equipe: 3, codigo: 31, apelido: 'GIOVANE A.', campanha: 0, cupons: 43 },
    { equipe: 1, codigo: 32, apelido: 'LAURIDES S.', campanha: 0, cupons: 254 },
    { equipe: 3, codigo: 36, apelido: 'SARA C.', campanha: 0, cupons: 32 },
    { equipe: 3, codigo: 39, apelido: 'SÔNIA R.', campanha: 0, cupons: 17 },
    { equipe: 1, codigo: 42, apelido: 'LUCIANE P.', campanha: 0, cupons: 34 },
    { equipe: 1, codigo: 34, apelido: 'MARISOL S.', campanha: 0, cupons: 12 },
    { equipe: 3, codigo: 43, apelido: 'ADRIANO P.', campanha: 0, cupons: 35 },
    { equipe: 3, codigo: 47, apelido: 'ODAIR D.', campanha: 0, cupons: 41 },
    { equipe: 1, codigo: 51, apelido: 'ROBERTO M.', campanha: 0, cupons: 90 },
    { equipe: 2, codigo: 70, apelido: 'ELISANDRA S.', campanha: 0, cupons: 62 },
    { equipe: 1, codigo: 83, apelido: 'MARCOS P.', campanha: 0, cupons: 114 },
    { equipe: 4, codigo: 101, apelido: 'LARISSA R.', campanha: 0, cupons: 111 },
    { equipe: 4, codigo: 108, apelido: 'CLEBER M.', campanha: 0, cupons: 47 },
    { equipe: 4, codigo: 110, apelido: 'ANNIARISON P..', campanha: 0, cupons: 30 },
    { equipe: 3, codigo: 116, apelido: 'FABIO S.', campanha: 0, cupons: 40 },
    { equipe: 4, codigo: 124, apelido: 'ALMIR M.', campanha: 0, cupons: 62 },
    { equipe: 2, codigo: 133, apelido: 'ROSEMEIRE R.', campanha: 0, cupons: 68 },
    { equipe: 2, codigo: 120, apelido: 'CLAUDINEIA Q.', campanha: 0, cupons: 14 },
    { equipe: 1, codigo: 145, apelido: 'RAFAEL S.', campanha: 0, cupons: 16 },
    { equipe: 1, codigo: 148, apelido: 'JONATHA G.', campanha: 0, cupons: 107 },
    { equipe: 1, codigo: 155, apelido: 'CINTHIA M.', campanha: 0, cupons: 49 },
    { equipe: 4, codigo: 162, apelido: 'MARCEL S.', campanha: 0, cupons: 99 },
    { equipe: 4, codigo: 168, apelido: 'GABRIELA P.', campanha: 0, cupons: 26 },
    { equipe: 3, codigo: 174, apelido: 'ROSANGELA G.', campanha: 0, cupons: 72 },
    { equipe: 2, codigo: 175, apelido: 'ALESSANDRO P.', campanha: 0, cupons: 301 },
    { equipe: 3, codigo: 176, apelido: 'HEBER S.', campanha: 0, cupons: 11 },
    { equipe: 2, codigo: 178, apelido: 'LUIZ L.', campanha: 0, cupons: 10 },
    { equipe: 1, codigo: 179, apelido: 'VITOR A.', campanha: 0, cupons: 46 },
    { equipe: 1, codigo: 185, apelido: 'DIOGENES F.', campanha: 0, cupons: 67 },
    { equipe: 4, codigo: 186, apelido: 'DOUGLAS F.', campanha: 0, cupons: 48 },
    { equipe: 2, codigo: 191, apelido: 'LUDMILA G.', campanha: 0, cupons: 89 },
    { equipe: 1, codigo: 185, apelido: 'DIOGENES F.', campanha: 1, cupons: 31 },
    { equipe: 1, codigo: 179, apelido: 'VITOR A.', campanha: 1, cupons: 14 },
    { equipe: 3, codigo: 176, apelido: 'HEBER S.', campanha: 1, cupons: 63 },
    { equipe: 2, codigo: 175, apelido: 'ALESSANDRO P.', campanha: 1, cupons: 86 },
    { equipe: 4, codigo: 162, apelido: 'MARCEL S.', campanha: 1, cupons: 27 },
    { equipe: 1, codigo: 155, apelido: 'CINTHIA M.', campanha: 1, cupons: 15 },
    { equipe: 1, codigo: 148, apelido: 'JONATHA G.', campanha: 1, cupons: 144 },
    { equipe: 2, codigo: 120, apelido: 'CLAUDINEIA Q.', campanha: 1, cupons: 82 },
    { equipe: 3, codigo: 116, apelido: 'FABIO S.', campanha: 1, cupons: 68 },
    { equipe: 4, codigo: 108, apelido: 'CLEBER M.', campanha: 1, cupons: 10 },
    { equipe: 4, codigo: 101, apelido: 'LARISSA R.', campanha: 1, cupons: 62 },
    { equipe: 1, codigo: 51, apelido: 'ROBERTO M.', campanha: 1, cupons: 64 },
    { equipe: 3, codigo: 47, apelido: 'ODAIR D.', campanha: 1, cupons: 61 },
    { equipe: 1, codigo: 34, apelido: 'MARISOL S.', campanha: 1, cupons: 15 },
    { equipe: 1, codigo: 42, apelido: 'LUCIANE P.', campanha: 1, cupons: 47 },
    { equipe: 1, codigo: 32, apelido: 'LAURIDES S.', campanha: 1, cupons: 165 },
    { equipe: 1, codigo: 27, apelido: 'KAREN E.', campanha: 1, cupons: 26 },
    { equipe: 3, codigo: 26, apelido: 'ALEX J.', campanha: 1, cupons: 49 },
    { equipe: 2, codigo: 19, apelido: 'ISRAEL S.', campanha: 1, cupons: 110 },
    { equipe: 2, codigo: 11, apelido: 'THIAGO S.', campanha: 1, cupons: 112 },
    { equipe: 2, codigo: 8, apelido: 'DANIEL S.', campanha: 1, cupons: 38 },
    { equipe: 2, codigo: 7, apelido: 'HILTON S.', campanha: 1, cupons: 12 },
    { equipe: 2, codigo: 7, apelido: 'HILTON S.', campanha: 2, cupons: 110 },
    { equipe: 2, codigo: 8, apelido: 'DANIEL S.', campanha: 2, cupons: 38 },
    { equipe: 2, codigo: 11, apelido: 'THIAGO S.', campanha: 2, cupons: 86 },
    { equipe: 3, codigo: 26, apelido: 'ALEX J.', campanha: 2, cupons: 35 },
    { equipe: 1, codigo: 27, apelido: 'KAREN E.', campanha: 2, cupons: 74 },
    { equipe: 1, codigo: 32, apelido: 'LAURIDES S.', campanha: 2, cupons: 38 },
    { equipe: 3, codigo: 31, apelido: 'GIOVANE A.', campanha: 2, cupons: 16 },
    { equipe: 1, codigo: 42, apelido: 'LUCIANE P.', campanha: 2, cupons: 46 },
    { equipe: 1, codigo: 34, apelido: 'MARISOL S.', campanha: 2, cupons: 73 },
    { equipe: 3, codigo: 43, apelido: 'ADRIANO P.', campanha: 2, cupons: 41 },
    { equipe: 3, codigo: 47, apelido: 'ODAIR D.', campanha: 2, cupons: 15 },
    { equipe: 1, codigo: 51, apelido: 'ROBERTO M.', campanha: 2, cupons: 30 },
    { equipe: 1, codigo: 83, apelido: 'MARCOS P.', campanha: 2, cupons: 40 },
    { equipe: 2, codigo: 70, apelido: 'ELISANDRA S.', campanha: 2, cupons: 120 },
    { equipe: 4, codigo: 101, apelido: 'LARISSA R.', campanha: 2, cupons: 116 },
    { equipe: 3, codigo: 116, apelido: 'FABIO S.', campanha: 2, cupons: 195 },
    { equipe: 4, codigo: 110, apelido: 'ANNIARISON P..', campanha: 2, cupons: 42 },
    { equipe: 2, codigo: 120, apelido: 'CLAUDINEIA Q.', campanha: 2, cupons: 25 },
    { equipe: 1, codigo: 145, apelido: 'RAFAEL S.', campanha: 2, cupons: 114 },
    { equipe: 2, codigo: 133, apelido: 'ROSEMEIRE R.', campanha: 2, cupons: 13 },
    { equipe: 2, codigo: 134, apelido: 'MARCOS N.', campanha: 2, cupons: 30 },
    { equipe: 1, codigo: 148, apelido: 'JONATHA G.', campanha: 2, cupons: 103 },
    { equipe: 1, codigo: 155, apelido: 'CINTHIA M.', campanha: 2, cupons: 28 },
    { equipe: 4, codigo: 162, apelido: 'MARCEL S.', campanha: 2, cupons: 250 },
    { equipe: 2, codigo: 170, apelido: 'ANDRÉ P.', campanha: 2, cupons: 20 },
    { equipe: 2, codigo: 175, apelido: 'ALESSANDRO P.', campanha: 2, cupons: 206 },
    { equipe: 3, codigo: 174, apelido: 'ROSANGELA G.', campanha: 2, cupons: 27 },
    { equipe: 3, codigo: 176, apelido: 'HEBER S.', campanha: 2, cupons: 23 },
    { equipe: 2, codigo: 178, apelido: 'LUIZ L.', campanha: 2, cupons: 12 },
    { equipe: 1, codigo: 185, apelido: 'DIOGENES F.', campanha: 2, cupons: 67 },
    { equipe: 3, codigo: 187, apelido: 'GILBERTO B.', campanha: 2, cupons: 38 }
  ];

  getData(): any[] {
    let reg = localStorage.getItem('registros');
    if (!reg) {
      this.salvarLocal();
      reg = localStorage.getItem('registros');
    }
    return JSON.parse(reg)
  }

  private salvarLocal() {
    localStorage.setItem('registros', JSON.stringify(this.data));
  }

  public atualizarRegistro(item, index) {
    this.data[index] = item;
    this.salvarLocal();
  }
}