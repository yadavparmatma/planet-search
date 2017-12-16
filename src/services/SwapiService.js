const SWAPI_PEOPLE_BASE_URL="https://swapi.co/api/people";
const SWAPI_PLANET_BASE_URL="https://swapi.co/api/planets";

const SwapiService =  {
    _headers() {
        return {
            "Content-Type": "application/json"
        };
    },

    _responseToJson(response, errorMessage = 'could not fetch') {
        return response.ok ? Promise.resolve(response.text()
            .then(res => (res ? JSON.parse(res) : undefined))) : Promise.reject(errorMessage);
    },

    getCharacter(name){
        const request = {
            method: 'GET',
            headers: this._headers()
        };

        return fetch(`${SWAPI_PEOPLE_BASE_URL}?name=${name}`, request).then(this._responseToJson)
    },

    getPlanets(name){
        const request = {
            method: 'GET',
            headers: this._headers()
        };

        return fetch(`${SWAPI_PLANET_BASE_URL}?name=${name}`, request).then(this._responseToJson)
    }
};

export default SwapiService;