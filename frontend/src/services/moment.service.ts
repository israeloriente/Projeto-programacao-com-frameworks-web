import moment from "moment";

export namespace Moment {
  export const calculateHourDifference = (
    date1: string,
    date2: string,
    hours: number
  ): boolean => {
    const momentDate1 = moment(date1);
    const momentDate2 = moment(date2);
    return momentDate2.diff(momentDate1, "hours") === hours;
  };
}
