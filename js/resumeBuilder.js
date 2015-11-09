var name = "Franco Talarico";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole).prepend(formattedName);

var skills = ['UX Designer', 'GIT', 'Python', 'JS', 'AngularJS'];
$("#header").append(HTMLskillsStart);
var formattedSkills = HTMLskills.replace("%data%", skills);

var bio = {
    'name': 'Franco Talarico',
    'role': 'Web developer',
    'contacts': {
        'email': 'francotalarico93@gmail.com',
        'tel': 152037032,
        'address': 'Paraguay 4693'
    },
    'picture': 'images/me.png',
    'welcomeMessage': 'Welcome!',
    'skills': skills
};

//$("#main").append(bio.name);

var work = {
    'position': 'Web developer',
    'city': 'Rosario',
    'years_worked': 3
};

var education = {};

education["last_school"] = "Los Angeles";
education["last_year"] = "2011";
education["city"] = "Rosario";

//$("#main").append(work["position"], education.last_school);

if(bio.skills.length != 0){
    $("#skills").append(formattedSkills);
}