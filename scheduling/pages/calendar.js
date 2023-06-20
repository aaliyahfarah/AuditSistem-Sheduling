import Layout from '@/components/layout'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'

export default function CalendarPage() {
  return (
    <Layout>
      <div className='calendar-container'>
        <FullCalendar
          plugins={[
            resourceTimelinePlugin,
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'resourceTimelineWeek,dayGridMonth,timeGridWeek'
          }}
          initialView='resourceTimelineWeek'
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          resources={[
            { id: 'a', title: 'Mesin A' },
            { id: 'b', title: 'Mesin B', eventColor: 'green' },
            { id: 'c', title: 'Mesin C', eventColor: 'orange' },
          ]}
          //ganti date
          initialEvents={[
            { title: 'Buat Kue', start: new Date(), resourceId: 'a' }, 
            { title: 'nice event', start: new Date(), resourceId: 'a' }
          ]}
        />
      </div>
    </Layout>
  )
}
