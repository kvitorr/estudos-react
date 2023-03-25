import { Person } from "../interfaces/Person";


export function areObjectsEqual(obj1: Person, obj2: Person): boolean {
    // verifique se ambos são objetos
    if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) {
      return false;
    }
  
    // verifique se têm a mesma quantidade de propriedades
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }

    const keysObj1 = Object.keys(obj1)
  
    // percorra as propriedades do primeiro objeto e compare com o segundo
    for (const keysObj of keysObj1) {
      if (obj1.hasOwnProperty(keysObj)) {
        if (!obj2.hasOwnProperty(keysObj)) {
          return false;
        }
  
        // compare os valores das propriedades
        if (obj1[keysObj] !== obj2[keysObj]) {
          return false;
        }
      }
    }
  
    return true;
  }
  