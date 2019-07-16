/**
 * @param registrationDetails Parameter containing the email, password, confirmPassword, phone number
 * @returns Object Object containing an error indicator and the corresponding error message
 */
function validateRegistrationDetails(registrationDetails) {
    // Ensure the email, password, confirmPassword are not blank
    if (registrationDetails.email === "") {
        return {error: true, message: 'Email should not be blank!'}
    }

    if (registrationDetails.password === '') {
        return {error: true, message: 'Password should not be blank!'}
    }

    if (registrationDetails.confirmPassword === '') {
        return {error: true, message: 'Confirm Password should not be blank!'}
    }

    //checks whether the password and the confirm password are matching.
    if (registrationDetails.password !== registrationDetails.confirmPassword) {
        //returns true if the password and the confirm password are not matching.
        return {error: true, message: 'Password should match with the confirm password!'}
    }

    // The user details are correct. return error as false and message as Details are valid!
    return {error: false, message: 'Details are valid!'}
}


/**  Parameter containing the email and password **/
function validateLoginDetails(loginDetails) {
    // Ensure the email and the password are not blank
    if (loginDetails.email === '') {
        return {error: true, message: 'Email should not be blank!'}
    }
    if (loginDetails.password === '') {
        return {error: false, message: 'Password should not be blank'}
    }
    //checks whether the email and the password entered by the user  are matching with stored user details.
    if (loginDetails.email !== localStorage.email) {
        return {error: true, message: 'Incorrect user Email! Check and try again!'}
    }
    if (loginDetails.password !== localStorage.password) {
        return {error: true, message: 'Incorrect user password! Check and try again!'}
    }
    // if the details are correct, return error as false and message as Details are valid!
    return {error: false, message: 'Details are Valid!'}
}


function updateLike(pictureIndex) {
    let pictureItem = timeline[pictureIndex];

    pictureItem.likes ++;

    timeline[pictureIndex] = pictureItem;

    return timeline[pictureIndex];
}
function updateComment(pictureIndex) {
    let  pictureItem =timeline[pictureIndex];

    pictureItem.comments ++;

    return timeline[pictureIndex];
}