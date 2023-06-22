export function domInjector(seletor: string) {
    
    return function(target: any, propertyKey: string) { //  tem acesso aos meus inputs 
        console.log(`Modificando protype ${target.constructor.name}
             e adicionando getter para a propriedade ${propertyKey}`);

        let elemento: HTMLElement;

        const getter = function() {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);// primeira chamada normalmente.
                console.log(`buscando elemento do DOM com o seletor 
                 ${seletor} para injetar em ${propertyKey}`);
            }
            
            return elemento;
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
        );
    }
}