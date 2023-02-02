import app from "../src/app";
import supertest from "supertest";

const server = supertest(app);

describe("Fruits Get Route", () => {
    it("When give a valid task it should return fruit list", async () => {
        const result = await server.get("/fruits");
        const response = result.body;

        expect(response.length).toBe(3);
    });

    describe("Specific fruit route", () => {
        it("When give a invalid param", async () => {
            const result = await server.get("/fruits/6");

            expect(result.status).toBe(404);
        });

        it("When give a valid param", async () => {
            const result = await server.get("/fruits/2");
            const response = result.body;

            expect(response).toEqual({
                id: 2,
                name: "Maçã",
                price: 4,
            });
        });
    });
});

describe("Fruits Post Route", () => {
    it("When give a invalid body, should response with 422", async () => {
        const body = {};
        const result = await server.post("/fruits").send(body);

        expect(result.status).toBe(422);
    });

    it("When give a valid body should return 201", async () => {
        const body = { name: "pera", price: 8 };
        const result = await server.post("/fruits").send(body);

        expect(result.status).toBe(201);
    });
});
