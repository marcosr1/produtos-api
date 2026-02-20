let menuCache = null;
let cacheTime = null;

const CACHE_TTL = 60 * 1000;

export const getMenuCache = () => {
    if (!menuCache) return null;

    const now = Date.now();

    if (now - cacheTime > CACHE_TTL) {
        menuCache = null;
        cacheTime = null;
        return null;
    }

    return menuCache;
};

export const setMenuCache = (menu) => {
    menuCache = menu;
    cacheTime = Date.now();
};

export const clearMenuCache = () => {
    menuCache = null;
    cacheTime = null;
};