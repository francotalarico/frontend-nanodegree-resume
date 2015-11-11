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
            'location': 'Santa Fe, Rosario',
            'dates': '2014 - 2015',
            'description': 'The digital world changed our lives, how we relate to each other, how we communicate and express ourselves.'
        },
        {
            'employer': 'Sotrick',
            'title': 'Digital planner',
            'location': 'San Nicolás',
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

/*
function locationizer(work_obj){
    var locations = [];

    for(var job in work_obj.jobs){
        locations.push(work_obj.jobs[job].location);
    }

    return locations;
}
*/

var projects = {
    'projects': [
        {
            'title': 'Historia viva',
            'dates': 'Agosto de 2015',
            'description': 'Sitio web realizado con HTML5, CSS3 y el framework AngularJS para darle dinamismo.',
            'images': [
                'images/historia-viva/1.png',
                'images/historia-viva/2.png'
            ]

        },
        {
            'title': 'MBAAG',
            'dates': 'Noviembre de 2015',
            'description': 'Sitio web realizado con HTML5, CSS3 y jQuery.',
            'images': [
                'images/mbaag/1.png',
                'images/mbaag/2.png'
            ]

        }
    ],
    'display': function(projects_obj){
        for(var project in projects_obj.projects){
            $("#projects").append(HTMLprojectStart);
            var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects_obj.projects[project].title);
            var formattedProjDates = HTMLprojectDates.replace("%data%", projects_obj.projects[project].dates);
            var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects_obj.projects[project].description);

            $(".project-entry:last")
                .append(formattedProjTitle)
                .append(formattedProjDates)
                .append(formattedProjDescription);

            if(projects_obj.projects[project].images.length > 0){
                for(image in projects_obj.projects[project].images){
                    $(".project-entry:last")
                        .append(HTMLprojectImage.replace("%data%", projects_obj.projects[project].images[image]));
                }
            }

        }

    }
};

projects.display(projects);

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

//$("#main").append(bio.name);



//$("#main").append(work["position"], education.last_school);

if(bio.skills.length != 0){
    for(skill in bio.skills){
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
}

//$("#main").append(internationalizeButton);


// Internationalized Name
function inName(name){
    name = "franco talarico";
    var internationalizedName = name.split(" ");
    internationalizedName[1] = internationalizedName[1].toUpperCase();
    internationalizedName = internationalizedName.join(" ");

    internationalizedName = internationalizedName.charAt(0).toUpperCase() + internationalizedName.slice(1);
    return internationalizedName;
}