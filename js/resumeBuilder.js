var name = "Franco Talarico";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole).prepend(formattedName);

var skills = ['UX Designer', 'GIT', 'Python', 'JS', 'AngularJS'];

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

$("#main").append(bio.name);