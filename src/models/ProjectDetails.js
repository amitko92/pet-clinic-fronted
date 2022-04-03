export default class ProjectDetails {

    constructor(id = '', name = '', serialNumber = '') {

      this.id = id;
      this.name = name;
      this.serialNumber = serialNumber;

  }

    setId(id){
      this.id = id;
    }

    setSerialNumber(serialNumber){
      this.serialNumber = serialNumber;
    }

    setName(name){
      this.name = name;
    }

    getId(){
      return this.id;
    }

    getSerialNumber(){
      return this.serialNumber;
    }

    getName(){
      return this.name;
    }

}
