export function logarTempoDeExecucao(emSegundo: boolean = false){
  return function(
      target: any,
      propertyKey:string, 
      descriptor: PropertyDescriptor
     ) {
      const metodoOriginal = descriptor.value;
      descriptor.value = function(...args:Array<any>) {
        let divisor = 1;
        let unidade = 'milisegundos';
        if(emSegundo){
          divisor = 1000;
          unidade = 'segundos'
        }
        const t1 = performance.now();
        const retorno = metodoOriginal.apply(this, args);
        const t2 = performance.now();
        console.log(`${propertyKey}, tempo execução ${(t1-t2/divisor)} ${unidade}`);
        retorno;
      };
      return descriptor;
    }
}
// pode replicar para qualquer operação que quiser