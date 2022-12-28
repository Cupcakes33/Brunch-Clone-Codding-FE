import TimeAgo from "timeago-react";
import * as timeAgo from "timeago.js";
import ko from "timeago.js/lib/lang/ko";

const TimeAgoKo = ({ createAt }) => {
  const createAtByServer = createAt.split(".");
  const fixedDateType = new Date(createAtByServer[0]);
  timeAgo.register("ko", ko);
  return <TimeAgo datetime={fixedDateType} locale="ko" />;
};

export default TimeAgoKo;
