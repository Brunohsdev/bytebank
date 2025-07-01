import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarMoeda } from "../utils/formatters.js";
import { formatarData } from "../utils/formatters.js";
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(Conta.getDatadeAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
rendenizarSaldo();
export function rendenizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        rendenizarSaldo();
    }
};
export default SaldoComponent;
