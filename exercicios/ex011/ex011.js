/* 
    Function() construtor

    *expressão new
    *criar um novo objecto
    *this keyword

*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " consegue andar"
    }
    this.pcd = function() {
        return this.name + ' é uma pessoa com deficiência'
    }
}
const rafael = new Person("rafael")
const joaqui = new Person("joaqui")
console.log(rafael.walk())
console.log(joaqui.pcd())