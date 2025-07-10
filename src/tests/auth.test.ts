import { describe, expect, test } from "vitest"
import { getAPIKey } from "../api/auth";

describe("getApiKey", () => {
    test("should return null if no authorization header is present", () => {
        const headers = {};
        const apiKey = getAPIKey(headers);
        expect(apiKey).toBeNull();
    })

    test("should return null if authorization header is not in the correct format", () => {
        const headers = {
            authorization: "ApiKey"
        }
        const apiKey = getAPIKey(headers);
        expect(apiKey).toBeNull();
    })

    test("should return api key if authorization header is in the correct format", () => {
        const headers = {
            authorization: "ApiKey 123"
        }

        const apiKey = getAPIKey(headers);

        expect(apiKey).toBe("123"); 
    })
})