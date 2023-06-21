import {
  Calendar as BigCalendar,
  momentLocalizer,
  Views
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
//momentLocalizer(moment);
const localizer = momentLocalizer(moment);


//(year,month index -> jnauary=0,date,hour, minute,sec)
const events = [
  {
    id: 0,
    title: "JO.02-18-2013.1001.1002",
    start: new Date(2023, 5, 21, 9, 0, 0),
    end: new Date(2023, 5, 21, 13, 0, 0),
    resourceId: 1
  },
  // {
  //   id: 1,
  //   title: "JO.02-18-2013.1001.1001",
  //   allDay: true,
  //   start: new Date(2023, 6, 21, 14, 0, 0),
  //   end: new Date(2023, 6, 21, 16, 30, 0),
  //   resourceId: 2
  // },
  {
    id: 1,
    title: "JO.02-18-2013.1001.1001",
    start: new Date(2023, 5, 21, 14, 0, 0),
    end: new Date(2023, 5, 21, 16, 30, 0),
    resourceId: 2
  },
  {
    id: 2,
    title: "JO.02-04-2013.1001.1003",
    start: new Date(2023, 5, 21, 8, 30, 0),
    end: new Date(2023, 5, 21, 12, 30, 0),
    resourceId: 3
  },
  {
    id: 11,
    title: "JO.02-18-2013.1001.1003",
    start: new Date(2023, 5, 21, 7, 0, 0),
    end: new Date(2023, 5, 21, 10, 30, 0),
    resourceId: 4
  }
];

const resourceMap = [
  { resourceId: 1, resourceTitle: "Alas" },
  { resourceId: 2, resourceTitle: "Supporting" },
  { resourceId: 3, resourceTitle: "Mesin Pembuat Kue" },
  { resourceId: 4, resourceTitle: "Mesin Pembuat Kue 2" }
];

const styles = {
  container: {
    width: "80wh",
    height: "60vh",
    margin: "2em"
  }
};

export default function CustomCalendar() {
  return (
    <div style={styles.container}>
      <BigCalendar
        selectable
        localizer={localizer}
        events={events}
        defaultView={Views.DAY}
        views={[Views.DAY, Views.WEEK, Views.MONTH]}
        steps={60}
        defaultDate={new Date()}
        resources={resourceMap}
        resourceIdAccessor="resourceId"
        resourceTitleAccessor="resourceTitle"
      />
    </div>
  );
}
