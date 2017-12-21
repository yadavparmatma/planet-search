import fetchMock from 'fetch-mock';
import SwapiService from "./SwapiService";

describe("Swapi Service", () => {

    afterEach(() => {
        fetchMock.restore();
    });

    const SWAPI_PEOPLE_BASE_URL = "https://swapi.co/api/people/";
    const SWAPI_PLANET_BASE_URL = "https://swapi.co/api/planets/";

    it("should return character", (done) => {
        const character = {"name": "Luke Skywalker"};

        const response = new Response(JSON.stringify(character), {status: 200});
        fetchMock.once(`${SWAPI_PEOPLE_BASE_URL}?search=Luke`, response);

        SwapiService.getCharacter("Luke")
            .then((res) => {
                expect(fetchMock.calls().matched.length).toBe(1);
                expect(res).toEqual(character);
                done();
            });
    });

    it("should return planet", (done) => {
        const palnet = [{"name": "Terrian"}];

        const response = new Response(JSON.stringify(palnet), {status: 200});
        fetchMock.once(`${SWAPI_PLANET_BASE_URL}?search=ter`, response);

        SwapiService.getPlanets("ter")
            .then((res) => {
                expect(fetchMock.calls().matched.length).toBe(1);
                expect(res).toEqual(palnet);
                done();
            });
    })
});