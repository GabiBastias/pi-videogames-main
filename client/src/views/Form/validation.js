const nameRegex = new RegExp(/^[a-zA-Z0-9 _]+$/);
const imageURLRegex = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&=]*)/);

const validation = (data) => {
    let errors = {};

    if (!data.name) {
        errors.name = "This input can't be empty.";
    } else if (!nameRegex.test(data.name)){
        errors.name = "The name must contains letters, numbers and spaces only.";
    }

    if (data.platforms.length < 1) {
        errors.platforms = "Please add at least one platform."
    }

    if (!data.releaseDate) {
        errors.releaseDate = "Choose a release date.";
    }

    if (!data.rating) {
        errors.rating = "Rate the game.";
    }

    if (!data.image) {
        errors.image = "This input can't be empty.";
    } else if (!imageURLRegex.test(data.image)){
        errors.image = 'Image URL is not valid.';
    }

    if (data.genres.length < 1) {
        errors.genres = 'Please choose at least one genre.'
    }

    return errors;
}

export default validation;