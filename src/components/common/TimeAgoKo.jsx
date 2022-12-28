import TimeAgo from "timeago-react";
import * as timeAgo from "timeago.js";
import ko from "timeago.js/lib/lang/ko";

const TimeAgoKo = ({ createAt }) => {
  const fixedDateType = new Date(createAt.split(".")[0]);
  // createAt 을 받아와서 . 을 기준으로 밀리세컨드 분리하여 new Date 로 시간을 생성
  const plusNineHour = fixedDateType.setTime(fixedDateType.getTime() + 9 * 60 * 60 * 1000);
  // 생성된 date type에 setTime으로 해당 시간에 밀리세컨드 단위로 9시간을 더해줌
  timeAgo.register("ko", ko);
  return <TimeAgo datetime={plusNineHour} locale="ko" />;
};

export default TimeAgoKo;
