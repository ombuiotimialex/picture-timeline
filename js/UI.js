function register() {
    // Read the registrations details from the email , password and confirm password section
    let registrationDetails = {
        email: document.getElementById("emailInput").value,
        password: document.getElementById("passwordInput").value,
        confirmPassword: document.getElementById("confirmPasswordInput").value,
        phoneNumber: document.getElementById("phoneNumberInput").value
    };

    // Get the validation status
    let registrationValidation = validateRegistrationDetails(registrationDetails);

    // After validating the correct form of details, confirms the details as valid.
    if (registrationValidation.error) {
        alert(registrationValidation.message);
    } else {
        // Store the user details
        userDetails.email = registrationDetails.email;
        userDetails.password = registrationDetails.password;
        userDetails.phoneNumber = registrationDetails.phoneNumber;

        // Store the data permanently
        localStorage.setItem("email", userDetails.email);
        localStorage.setItem("password", userDetails.password);
        localStorage.setItem("phoneNumber", userDetails.phoneNumber);

        // Direct the user to the login page
        window.location = "login.html";
    }
}

// login page.
function login() {
    // user inputs the email and password at the email and password section respectively.
    let loginDetails = {
        email: document.getElementById("emails").value,
        password: document.getElementById("passwords").value,

    }
    // After validating the correct form of details, confirms the details as valid!
    if (validateLoginDetails(loginDetails).error) {
        alert(validateLoginDetails(loginDetails).message);
    } else {
        //Direct the user to the picture timeline page.
        window.location = "pictures_timeline.html";
    }

}

// picture timeline page.
function generatePictureTimeline() {
    let timelineTableBody = document.getElementById('timelineTableBody');

    for (let k = 0; k < timeline.length; k++) {
        let timelineItem = timeline[k];

        let pictureTimelineRow =
            "<tr >" +
            "<td colspan='4'> <img class='timeline-pic' src='../img/" + timelineItem.imgURL + "'/>" +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>" +
            "<div>" +
            "<i class='far fa-heart' onclick='likePicture(" + k + ")'> " +
            "</i>" +
            "</div>" +
            "</td>" +
            "<td>" +
            "<div>" +
            "<p id='likes_" + k + "'>" + timelineItem.likes + "Likes" +
            "</p>" +
            "</div>" +
            "</td>" +
            "<td>" +
            "<div>" +
            "<p id='comments_"+k+"'>" + timelineItem.comments + " Comments" +
            "</p>" +
            "</div>" +
            "</td>" +
            "<td>" +
            "<div>" +
            "<i class='far fa-smile' onclick='commentOnPicture("+k+")'>" +
            "</i>" +
            "</div>" +
            "</td>" +
            "</tr>";

        timelineTableBody.innerHTML += pictureTimelineRow;
    }
}

function likePicture(pictureIndex) {
    let updateResult = updateLike(pictureIndex);

    let likePictureItemElement = document.getElementById('likes_' + pictureIndex);

    likePictureItemElement.innerText = updateResult.likes + ' Likes';
}
function commentOnPicture(pictureIndex){
    let updateResults = updateComment(pictureIndex);

    let commentOnPictureElement = document.getElementById('comments_' + pictureIndex);

    commentOnPictureElement.innerText = updateResults.comments + 'Comments';
}