// Required
// Email Validator
// Phone Validator
// Price Validator
// Number Validator
// Past Date Validator
// Future Date Validator

import GoogleLibPhoneNumber from "google-libphonenumber"

export const notEmpty = (string: string) => {
  return (string && string.length > 0);
}

export const isValidEmail = (email: string) => {
  return (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    )
  );
}

export const isValidString = (value: string) => {
  return (
    /^[a-zA-Z\-'.]+$/.test(value)
  );
}

export const isValidPhoneNumber = (phone: string, region: string = 'IN') => {
  const phoneUtil = GoogleLibPhoneNumber.PhoneNumberUtil.getInstance();
  return (phoneUtil.isValidNumberForRegion(phoneUtil.parse(phone, region), region));
}

export const isValidPrice = (price: any = '') => {
  if (typeof price === "string") {
    return (parseFloat(price) > 0)
  } else {
    return (price > 0)
  }
}

export const isValidNumber = (number: any = '') => {
  if (typeof number === "number") {
    return !isNaN(number);
  } else {
    return false;
  }
}

export const deepEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

export const removeDuplicateArrays = (array1: any, array2: any): any => {

  // console.log('array111-->', array1);
  // console.log('array222-->', array2);

  // const uniqueArray1 = array1.filter(obj1 => !array2.some(obj2 => obj1.id === obj2.id));
  // const uniqueArray2 = array2.filter(obj2 => !array1.some(obj1 => obj2.id === obj1.id));

  // return [uniqueArray1, uniqueArray2];

}


