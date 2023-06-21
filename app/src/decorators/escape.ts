export function escapar(
  target:any,
  propertyKey:string,
  descriptor: PropertyDescriptor
){
  const mentodoOriginal = descriptor.value
  descriptor.value = function(...args:any[]){
    let retorno = mentodoOriginal.apply(this, args);
    if(typeof retorno === "string"){
      console.log(`@Escape em ação classe ${this.constructor.name} 
      para o metodo ${propertyKey}`)
      retorno = retorno
          .replace(/<script>[\s\S]*?<\/script>/, '');
    }
    return retorno
  }
  return descriptor
}