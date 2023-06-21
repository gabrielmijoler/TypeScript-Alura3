export function domInjector(seletor: string){
  return function(
    target: any,
    propertyKey: string, //  tem acesso aos meus inputs 
  ){
    const getter = function(){
      const elemento = document.querySelector(seletor);
      console.log(`Buscando elemento do Dom, seletor ${seletor}, inseri valor ${propertyKey}`)
      return elemento;
    }
    Object.defineProperty(
        target, 
        propertyKey, 
        {get: getter}
      );
  }
}