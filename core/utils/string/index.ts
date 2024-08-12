/**
 * Demo Comment for Testing
 */

export const matchString = (
  string1: string,
  string2: string,
  caseSensitive: boolean = true
) => {
  if (caseSensitive) {
    return string1 === string2;
  } else {
    return string1.toLowerCase() === string2.toLowerCase();
  }
};

export const getAvatarText = (string: string = "") => {
  return string ? string.toUpperCase().charAt(0) : "A";
};

export const getName = (firstName: string = "", lastName: string = "") => {
  return `${firstName}${lastName ? " " + lastName : ""}`;
};

export const getFullName = (
  firstName: string = "",
  middleName: string = "",
  lastName: string = ""
) => {
  return `${firstName}${middleName ? " " + middleName : ""}${lastName ? " " + lastName : ""
    }`;
};

export const getCompleteAddress = (
  address: Array<String> = [],
  joiner: string = ", "
) => {
  return address.join(joiner);
};

export const getTransformedText = (
  text: string = "",
  casing: string = "capitalize"
) => {
  if (casing === "upper") return text.toUpperCase();
  else if (casing === "upper") return text.toLowerCase();
  else
    return text
      .split(" ")
      .map((e) => e.charAt(0).toUpperCase() + e.substring(1))
      .join(" ");
};

export const getEmptyText = (
  text: string = "",
  emptyText: string = "No Data Found"
) => {
  if (text && text.length > 0) return text;
  else return emptyText;
};

export const getTrimmedText = (text: string = "") => {
  return text.trimEnd();
};

export const formateString = (text: string) => {
  const wordsArray = text?.split("_");
  const capitalizedWords = wordsArray?.map((word) => {
    return word?.charAt(0)?.toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
};

export const remainingHours = (createdDate: string, totalHour: number) => {
  const currentDate: any = new Date();
  let finalHour: number;
  const newCreatedData: any = new Date(createdDate);
  const timeDifferenceMillis: any = currentDate - newCreatedData;
  const hours = Math.floor(timeDifferenceMillis / (1000 * 60 * 60));
  if (hours >= totalHour) {
    return (finalHour = 0);
  } else {
    finalHour = totalHour - hours;
  }

  return finalHour;
};

export const fileNameWithExtension = (inputString: string) => {
  // Split the string by '/' to get an array of parts
  const parts = inputString.split("/");

  // Get the last part (the filename with extension)
  const filenameWithExtension = parts[parts.length - 1];
  if (filenameWithExtension.length > 20) {
    return filenameWithExtension.substring(0, 20) + "...";
  }
  return filenameWithExtension;
};

export const getFormattedCurrency = (amount: number) => {
  const formatter = new Intl.NumberFormat(`en-IN`, {
    style: 'currency',
    currency: 'INR',
  });
  return formatter.format(amount ? amount : 0);
};

//distance calculate from lon lat
export const getDistanceFromLatLonInKm = (lat1: any, lon1: any, lat2: any, lon2: any) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);  // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

const deg2rad = (deg: any) => {
  return deg * (Math.PI / 180)
}




export const getFileExtensionType = (fileName: any) => {
  const name = fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);
  if (
    name.toLowerCase() === "jpg" ||
    name.toLowerCase() === "png" ||
    name.toLowerCase() === "jpeg"
  ) {
    return 1;
  } else if (
    name.toLowerCase() === "mkv" ||
    name.toLowerCase() === "mp4" ||
    name.toLowerCase() === "avi" ||
    name.toLowerCase() === "mov" ||
    name.toLowerCase() === "wmv" ||
    name.toLowerCase() === "flv" ||
    name.toLowerCase() === "webm" ||
    name.toLowerCase() === "3gp" ||
    name.toLowerCase() === "mpeg" ||
    name.toLowerCase() === "ogv" ||
    name.toLowerCase() === "divx" ||
    name.toLowerCase() === "asf" ||
    name.toLowerCase() === "mpg" ||
    name.toLowerCase() === "m4v" ||
    name.toLowerCase() === "ts" ||
    name.toLowerCase() === "vob" ||
    name.toLowerCase() === "ogm"
  ) {
    return 2;
  } else if (
    name.toLowerCase() === "mp3" ||
    name.toLowerCase() === "wav" ||
    name.toLowerCase() === "flac" ||
    name.toLowerCase() === "aac" ||
    name.toLowerCase() === "ogg" ||
    name.toLowerCase() === "wma" ||
    name.toLowerCase() === "m4a" ||
    name.toLowerCase() === "mp4" ||
    name.toLowerCase() === "aiff" ||
    name.toLowerCase() === "ape" ||
    name.toLowerCase() === "mid" ||
    name.toLowerCase() === "amr" ||
    name.toLowerCase() === "opus" ||
    name.toLowerCase() === "pcm" ||
    name.toLowerCase() === "au" ||
    name.toLowerCase() === "ra" ||
    name.toLowerCase() === "mka" ||
    name.toLowerCase() === "ac3"
  ) {
    return 3;
  } else if (name.toLowerCase() === "pdf") {
    return 4;
  } else if (
    name.toLowerCase() === "doc" ||
    name.toLowerCase() === "docx" ||
    name.toLowerCase() === "rtf" ||
    name.toLowerCase() === "txt" ||
    name.toLowerCase() === "odt" ||
    name.toLowerCase() === "xls" ||
    name.toLowerCase() === "xlsx" ||
    name.toLowerCase() === "csv" ||
    name.toLowerCase() === "ppt" ||
    name.toLowerCase() === "pptx" ||
    name.toLowerCase() === "key" ||
    name.toLowerCase() === "numbers" ||
    name.toLowerCase() === "pages" ||
    name.toLowerCase() === "html" ||
    name.toLowerCase() === "xml"
  ) {
    return 5;
  } else if (
    name.toLowerCase() === "doc" ||
    name.toLowerCase() === "docx" ||
    name.toLowerCase() === "rtf" ||
    name.toLowerCase() === "txt" ||
    name.toLowerCase() === "odt" ||
    name.toLowerCase() === "xls" ||
    name.toLowerCase() === "xlsx" ||
    name.toLowerCase() === "ppt" ||
    name.toLowerCase() === "pptx" ||
    name.toLowerCase() === "key" ||
    name.toLowerCase() === "numbers" ||
    name.toLowerCase() === "pages" ||
    name.toLowerCase() === "html" ||
    name.toLowerCase() === "xml"
  ) {
    return 5;
  } else if (name.toLowerCase() === "csv") {
    return 6;
  } else if (name.toLowerCase() === "folder") {
    return 8;
  } else if (name.toLowerCase() === "folder") {
    return 8;
  } else {
    return 100
  }
};
