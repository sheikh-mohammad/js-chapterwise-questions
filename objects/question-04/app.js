function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

function createPerson() {
    var male = document.getElementById("male")
    console.log(male.value);
}