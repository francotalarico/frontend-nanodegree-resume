var name = "Franco Talarico";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole).prepend(formattedName);

var bio = {
    'name': 'Franco Talarico',
    'role': 'Web developer',
    'contacts': {
        'email': 'francotalarico93@gmail.com',
        'tel': '3412-037032',
        'github': 'francotalarico93',
        'twitter': '@tala212',
        'location': 'Argentina'
    },
    'picture': 'images/me.png',
    'welcomeMessage': 'Welcome!',
    'skills': [
        'UX Designer',
        'GIT',
        'Python',
        'JS',
        'AngularJS'
    ]
};

var work = {
    'jobs': [
        {
            'employer': 'Aenima',
            'title': 'Software developer',
            'location': 'Argentina, Santa Fe, Rosario',
            'dates': '2014 - 2015',
            'description': 'The digital world changed our lives, how we relate to each other, how we communicate and express ourselves.'
        },
        {
            'employer': 'Sotrick',
            'title': 'Digital planner',
            'location': 'Argentina, Santa Fe, Rosario',
            'dates': '2013 - 2014',
            'description': 'My own bussiness.'
        }
    ]
};

function displayWork(){
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


        $(".work-entry:last")
            .append(formattedEmployerTitle)
            .append(formattedWorkDates)
            .append(formattedWorkDescription);
    }
}

displayWork();

var projects = {
    'projects': [
        {
            'title': 'Historia viva',
            'dates': 'Agosto de 2015',
            'description': 'Sitio web realizado con HTML5, CSS3 y el framework AngularJS para darle dinamismo.',
            'images': [
                {
                    'first': 'images/historia-viva/1.png',
                    'second': 'images/historia-viva/2.png',
                    'third': 'images/historia-viva/3.png'
                }
            ]

        },
        {
            'title': 'MBAAG',
            'dates': 'Noviembre de 2015',
            'description': 'Sitio web realizado con HTML5, CSS3 y jQuery.',
            'images': [
                {
                    'first': 'images/mbaag/1.png',
                    'second': 'images/mbaag/2.png',
                    'third': 'images/mbaag/3.png'
                }
            ]

        }
    ]
}

var education = {
    'schools': [
        {
            'name': 'Nuestra Señora de los Angeles',
            'location': 'Argentina, Santa Fe, Rosario',
            'degree': 'Comunicación, Arte y Diseño',
            'majors': [

            ],
            'dates': '2009 - 2012',
            'url': 'https://www.facebook.com/Nuestra-Se%C3%B1ora-de-los-Angeles-180248802082333/timeline/',
            'onlineCourses': [
                {
                    'title': '',
                    'school': '',
                    'dates': '',
                    'url': ''

                }
            ]
        }
    ]
};

$("#topContacts")
    .append(HTMLlocation.replace("%data%", bio.contacts.location))
    .append(HTMLmobile.replace("%data%", bio.contacts.tel))
    .append(HTMLemail.replace("%data%", bio.contacts.email))
    .append(HTMLgithub.replace("%data%", bio.contacts.github))
    .append(HTMLtwitter.replace("%data%", bio.contacts.twitter));

$("#header").append(HTMLbioPic.replace("%data%", bio.picture));

$("#header").append(HTMLskillsStart);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);

//$("#main").append(bio.name);



//$("#main").append(work["position"], education.last_school);

if(bio.skills.length != 0){
    $("#skills").append(formattedSkills);
}