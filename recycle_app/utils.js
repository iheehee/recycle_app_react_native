import { Platform } from "react-native";

export default {
  isAndroid: () => Platform.OS === "android",
  isEmail: (email) => {
    const regEx =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return regEx.test(email);
  },
  dateTime: (type, dateTime) => {
    let time = new Date(dateTime);
    switch (type) {
      case "year":
        return time.getFullYear();
      case "month":
        return time.toLocaleString("en-EN", { month: "short" }).toUpperCase();
      case "day":
        return time.getDay();
      case "time":
        const hours = time.getHours() % 12 ? time.getHours() % 12 : 12;
        const minutes =
          time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
        const ampm = time.getHours() >= 12 ? "PM" : "AM";
        return `${hours}:${minutes} ${ampm}`;
    }
  },
};
