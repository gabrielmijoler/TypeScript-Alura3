export function escapar(target, propertyKey, descriptor) {
    const mentodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = mentodoOriginal.apply(this, args);
        if (typeof retorno === "string") {
            console.log(`@Escape em ação classe ${this.constructor.name} 
      para o metodo ${propertyKey}`);
            retorno = retorno
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
