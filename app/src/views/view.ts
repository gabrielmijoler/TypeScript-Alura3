import { inspect } from "../decorators/inpect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
    }
    @logarTempoDeExecucao(true)// true quer ver em segundos.
    @inspect
    public update(model: T): void {
        let template = this.template(model);
    }

    protected abstract template(model: T): string;
}