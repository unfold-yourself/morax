class LocalStorage {
  constructor() {

  }

  static get(key) {
    return localStorage.getItem(key);
  }

  static set(key, val) {
    return localStorage.setItem(key, val);
  }

  static serializedGet(key) {
    const rawVal = localStorage.getItem(key);
    if (rawVal) {
      try {
        return JSON.parse(rawVal);
      } catch (e) {
        localStorage.removeItem(key);
        return false;
      }
    }
  }

  static serializedSet(key, val) {
    const serialized = JSON.stringify(val);
    localStorage.setItem(key, serialized);
  }
}

export {
  LocalStorage
}