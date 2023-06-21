export function escapar(target, propertyKey, descriptor) {
    const mentodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = mentodoOriginal.apply(this, args);
        if (typeof retorno === "string") {
            retorno = retorno
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
