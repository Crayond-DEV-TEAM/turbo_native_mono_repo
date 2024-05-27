// React native mmkv
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

export const localStorage = {
  setItem: (name: string, value: string | boolean) => {
    return storage.set(name, value);
  },
  getItem: (name: string) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  getBooleanItem: (name: string) => {
    return storage.getBoolean(name) ?? false;
  },
  removeItem: (name: string) => {
    return storage.delete(name);
  },
  removeAllItem: () => {
    return storage.clearAll();
  },
  checkContains: (name: string) => {
    return storage.contains(name);
  },
  getAllKeys: () => {
    return storage.getAllKeys();
  },
  removeKeysExceptDeviceId: () => {
    const allKeysExceptDeviceId = storage.getAllKeys()?.filter((key) => key !== 'deviceId');
    return allKeysExceptDeviceId.map((key) => {
      storage.delete(key);
      return key;
    });
  },
};

export default storage;
export { useMMKVString, useMMKVBoolean, useMMKVObject } from 'react-native-mmkv';
