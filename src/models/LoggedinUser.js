export default class LoggedinUser {

    constructor(userName = '', password = '', projectId = -1, fullName = '', rolls = []) {

      this.userName = userName;
      this.password = password;
      this.projectId = projectId;
      this.fullName = fullName;
      this.rolls = rolls;
  }

    setUserName(userName){
      this.userName = userName;
    }

    setFullName(fullName){
      this.fullName = fullName;
    }

    setPassword(password){
      this.password = password;
    }

    setProjectId(projectId){
      this.projectId = projectId;
    }

    setRolls(rolls){
      this.rolls = rolls;
    }

    getUserName(){
      return this.userName;
    }

    getFullName(){
      return this.fullName;
    }

    getPassword(){
      return this.password;
    }

    getProjectId(){
      return this.projectId;
    }

    getRolls(){
      return this.rolls;
    }

}
