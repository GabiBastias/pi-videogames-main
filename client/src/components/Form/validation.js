const nameRegex = new RegExp(/^[a-zA-Z0-9 _]+$/);
const imageURLRegex = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&=]*)/);

const validation = (data) => {
    let errors = {};

    if (!data.name) {
        errors.name = "This input can't be empty";
    } else if (!nameRegex.test(data.name)){
        errors.name = "The name must contains letters, numbers and spaces only";
    }

    if (data.description.length < 100) {
        errors.description = "Description must be longer";
    }

    if (!data.releaseDate) {
        errors.releaseDate = "This input can't be empty";
    }

    if (!data.rating) {
        errors.rating = "This input can't be empty";
    }

    if (!data.imageURL) {
        errors.imageURL = "This input can't be empty";
    } else if (!imageURLRegex.test(data.imageURL)){
        errors.imageURL = 'Image URL is not valid';
    }

    return errors;
}

export default validation;