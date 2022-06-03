import { assert, expect, test } from 'vitest'
import shared from '../src/app/shared'


test('shared.colorByPercentage()', () => {
    expect(shared.colorByPercentage(10)).toBe("green")
    expect(shared.colorByPercentage(50)).toBe("orange")
    expect(shared.colorByPercentage(80)).toBe("red")
    expect(shared.colorByPercentage(110)).toBe("violet")
});


/*const localStorageMock = (() => {
    let store = {};

    return {
        getItem(key) {
            return store[key] || null;
        },
        setItem(key, value) {
            store[key] = value.toString();
        },
        removeItem(key) {
            delete store[key];
        },
        clear() {
            store = {};
        }
    };
})();

const window = (() => {
    let w = {};

    return {
        w
    };
})();

Object.defineProperty(window, 'sessionStorage', {
    value: localStorageMock
});



test('shared.storeToken()', () => {

    shared.storeToken("mytoken", "true", "ecirbaf")

    let tokenVal = window.sessionStorage.getItem("X-Auth-Token")
    let nameVal = window.sessionStorage.getItem("name")
    let isAdminVal = window.sessionStorage.getItem("isAdmin")

    expect(tokenVal).toBe("mytoken")
    expect(nameVal).toBe("ecirbaf")
    expect(isAdminVal).toBe("true")


})*/