import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

const DATE_TIME_FORMATE = "YYYY-MM-DD HH:mm:ss"

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMATE
) {
  //国内时间是东八区，需要在原来utc的基础上加上8
  return dayjs.utc(utcString).utcOffset(8).format(format)
}
