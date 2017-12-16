export const authenticateUser = (resources, character) => {
    return resources.filter(resource => {
        return resource.name === character.name && resource['birth_year'] === character.password
    })
};
