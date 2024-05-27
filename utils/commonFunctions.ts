// React native device info
import { Alert, Linking, Platform } from 'react-native';
// Packages
import DeviceInfo from 'react-native-device-info';
import moment from 'moment';
import { TFunction } from 'i18next';
// Constants
// types
import { TCustomComponent, TList, TPaginationWithSearch, TTimeValue } from './types';

export const getDeviceMode = () => {
  const isTablet = DeviceInfo.isTablet();
  const isLandscape = DeviceInfo.isLandscapeSync();
  const isTabletLandscape = isTablet && isLandscape;
  return {
    isTablet,
    isLandscape,
    isTabletLandscape,
  };
};

export const getDeviceId = async () => {
  try {
    return await DeviceInfo.getInstanceId();
  } catch (error) {
    return '';
  }
};

export const getComponent = (component: TCustomComponent, fallback: React.ReactNode = null) => {
  return component ? (typeof component === 'function' ? component() : component) : fallback;
};

export const formatNumber = (number: number, maxLength = 2, fillString = '0') =>
  String(number).padStart(maxLength, fillString);

export const numberWithCommas = (number?: number, minimumFractionDigits = 2, maximumFractionDigits = 2) => {
  if (!number || isNaN(number)) {
    const defaultNumber = 0;
    return defaultNumber.toFixed(minimumFractionDigits);
  }
  return number?.toLocaleString('en-US', {
    minimumFractionDigits,
    maximumFractionDigits,
  });
};

export const amountWithCurrency = (currency: string, amount?: number) => {
  if (amount === undefined) {
    return numberWithCommas(amount);
  } else if (amount < 0) {
    return `- ${currency} ${numberWithCommas(Math.abs(amount))}`;
  } else {
    return `${currency} ${numberWithCommas(amount)}`;
  }
};

export const stringTrimmer = (value: string) => (value ? value?.trim() : '');

export const getName = (firstName = '', lastName = '') => {
  return stringTrimmer(`${stringTrimmer(firstName)} ${stringTrimmer(lastName)}`);
};

export const getTimeValue = (time: TTimeValue, is24HoursClock = false) => {
  const hours = is24HoursClock ? time.hours : time.hours > 12 ? time.hours - 12 : time.hours;
  return `${formatNumber(hours)}:${formatNumber(time.minutes)}${is24HoursClock ? '' : time.hours > 11 ? ' PM' : ' AM'}`;
};

export const validateFileSize = (bytes: number, maxsize: number, sizes: 'B' | 'KB' | 'MB') => {
  const getValueBySize = {
    B: 1,
    KB: 1024,
    MB: 1024 * 1024,
  };
  return bytes <= maxsize * getValueBySize[sizes];
};

export const paginationWithSearch = ({
  list = [],
  offset = 0,
  limit = 20,
  searchValue = '',
}: TPaginationWithSearch) => {
  let filteredListBySearch = list;
  if (searchValue) {
    filteredListBySearch = list.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
  }
  if (list.length > limit) {
    return filteredListBySearch.filter((_, i) => i >= offset && i < offset + limit);
  } else {
    return filteredListBySearch;
  }
};

export const applyOpacityHex = (hex: string, opacity: number) => {
  const hexOpacity = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');
  return hex + hexOpacity;
};

export const callToClient = (number: string) => {
  if (!number) {
    return null;
  }
  Linking.openURL(`tel://${number}`);
};

export const openMap = (lat: number, lang: number, uri?: string) => {
  if (lat && lang && !uri) {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${lang}`;
    const label = '';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url || '');
  } else {
    if (uri) {
      Linking.openURL(uri);
    }
  }
};
export const generateValueByKeys = (keys: string[], data: { [key: string]: unknown } = {}) => {
  return keys
    .reduce((total, key) => {
      const splittedKeys = key?.split('.');
      let val = '';
      if (splittedKeys.length > 1) {
        val = splittedKeys.reduce(
          // eslint-disable-next-line no-param-reassign
          (mergedValue, k) => (mergedValue = mergedValue?.[k] ? mergedValue?.[k] : data?.[k] ?? ''),
          ''
        );
      } else {
        val = (data?.[key] as string) || '';
      }
      // eslint-disable-next-line no-param-reassign
      return (total = total + val + ' ');
    }, '')
    ?.trim();
};

export const onChangeMultiSelection = (list: TList[], option: TList) => {
  const filteredList = list.filter((_) => _.id !== option.id);
  if (filteredList?.length !== list?.length) {
    return filteredList;
  } else {
    return [...list, option];
  }
};

export const formatDate = (date: string, format = 'DD-MM-YYYY, hh:mm a') => {
  return date && moment(date).isValid() ? moment(date).format(format) : '-';
};

export const getAssetType = (url: string) => url?.split('.')?.reverse()?.[0] ?? '';

export const getAssetNameFromUrl = (url: string) => url?.split('/')?.reverse()?.[0]?.split('_')?.reverse()?.[0] ?? '';

export const getFileSize = async (url: string) => {
  try {
    const response = await fetch(url);
    const contentLength = response.headers.get('Content-Length');
    if (contentLength) {
      return parseInt(contentLength);
    } else {
      return 0;
    }
  } catch (error) {
    console.error('Error getting file size:', error);
    return 0;
  }
};

export const convertBytesToNearestUnit = (bytes: number) => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  while (bytes >= 1024) {
    // eslint-disable-next-line no-param-reassign
    bytes /= 1024;
    i++;
  }
  return Math.round(bytes * 100) / 100 + ' ' + units[i];
};

export const convertToLowerCase = (value: string) => (value ? value.toLowerCase() : '');

export const calculatePrice = (costPrice = 0, baseQty = 0, qty = 0) => {
  return (costPrice / baseQty) * qty;
};

export const openURL = async (url: string) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Error opening the url: ${url}`);
  }
};

export const getValueFromPercentage = (value: string) => {
  const percentageValue = Number(value?.split('%')?.[0]);
  return isNaN(percentageValue) ? 0 : percentageValue;
};

export const getTableText = (kindId: number | null, tableName = '', t: TFunction) => {
  return kindId === ORDER_KIND_TYPES.TABLE ? tableName : kindId === ORDER_KIND_TYPES.TOGO ? t('togo') : t('dineIn');
};

export const objToQueryString = (obj: { [key: string]: string | number | boolean }) => {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }
  return keyValuePairs.join('&');
};
