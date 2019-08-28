//When About Link from the left side bar is clicked, it reloads the page
function OnAbout() {
    $('.about').on('click', function(e) {
        location.reload();
    });
}

//When Skills link is clicked, tools and technologies are displayed on right
function OnSkills() {
    $('.skills').on('click', function(e) {
        //console.log("Skills");
        //$('.bio').remove();
        $('.bio').html('<div class="skills-info"><p>Tools and Technologies : <span>HTML CSS JavaScript JQuery</span></p></div>');
    });
}

//When Projects link is clicked, project screenshots and description is displayed on the right
function OnProjects() {
    $('.projects').on('click', function(e) {
        // console.log("Projects");
        // $('.bio').remove();
        $('.bio').html('<div class="projects-info"><div class="project-image"><img src="Project1-Main.png" alt="Interactive App"/></div><div class="project-details"><p>Title - <span>Food Engineeering Quiz<br><br></span>Description - <span>Food Engineering Quiz</span> is an interactive web app to test your food knowledge. The quiz contains 10 questions and each question has 4 multiple-choice questions. The User gets feedback once they submit the answer. User must score at least 7 out of 10 to pass the quiz. User will have the option to restart the quiz at the end.<br><br>Technologies used - <span>HTML, CSS, JavaScript, JQuery.</span><br><br>Live App - <a href="https://supu4aqua.github.io"><span>https://supu4aqua.github.io</span></a><br><br>Github Repo - <a href="https://github.com/supu4aqua/InteractiveWebApp.git"><span>https://github.com/supu4aqua/InteractiveWebApp.git</span></a></div></div>');
    });

}


function OnContact() {
    $('.contact').on('click', function(e) {
        //console.log("Contact");
        // $('.bio').remove();
        $('.bio').html('<div class="contact-info"><p>E-Mail : <a href="mailto:me.supi@gmail.com?Subject=Hello" target="_top"><span>me.supi@gmail.com</span></a></p><p>Linkedin : <a href="https://www.linkedin.com/in/supreet-kaurb/"><span>https://www.linkedin.com/in/supreet-kaurb/</span></a></p><p>Github: <a href="https://github.com/supu4aqua/"><span>https://github.com/supu4aqua/</span></a></p></div>');

    });
}

//Following function collapses the sidebar
/*function openSidebar() {
    $('.icon').on('click', function(e) {

        $('.icon').css('display', 'none');
        $('.sidebar').css('display', 'block');
        $('.sidebar').toggleClass('smallSidebar');
    });
}*/
/*
function collapseSidebar() {
    $('.sidebar').on('click', function(e) {
        //$(e.currentTarget).toggleClass('hide');
        console.log("clicked sidebar");
        $('.sidebar').css('display', 'none');
        $('.icon').css('display', 'inline');
    });
}
*/
function OnLoad() {
    OnAbout();
    OnSkills();
    OnProjects();
    OnContact();
    //openSidebar();
    //collapseSidebar()
}

$(OnLoad);