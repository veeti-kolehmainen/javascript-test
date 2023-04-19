function getPerson (name) {
    this.name = name
    this.profession = "Teacher and dev"
    return this
}
/* Would look like this if it were allowed in JavaScript
var kalob.name = "Kalob"
var kalob.profession = "Teacher and dev"
*/
var kalob = getPerson("Kalob")