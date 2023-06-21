export function domInjector(seletor: string){
  return function(
    target: any,
    propertyKey: string, //  tem acesso aos meus inputs 
  ){
    let elemento:HTMLElement;
    const getter = function(){

      if(!elemento){
        elemento =<HTMLElement>document.querySelector(seletor);
        console.log(`Buscando elemento do Dom, seletor ${seletor}, inseri valor ${propertyKey}`) // primeira chamada normalmente.
      }
      
      return elemento;
    };

    Object.defineProperty(
        target, 
        propertyKey, 
        {get: getter}
      );
  };
};