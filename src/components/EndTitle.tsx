import moment from "moment";

export default function EndTitle() {
  const day = moment().format("DD");
  const weekday = moment().format("dddd");
  const year = moment().format("1YYYY - MM -");

  return (
    <div className="end-title">
      <p>
        Today is <span className="text-white">{weekday}</span>
      </p>
      <p>•</p>
      <p>
        HE&nbsp;&nbsp;
        {year} <span className="text-white">{day}</span>
      </p>
    </div>
  );
}
