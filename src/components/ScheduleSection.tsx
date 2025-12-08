const scheduleDay1 = [
  { time: "07:30 AM – 09:00 AM", activity: "Breakfast" },
  { time: "10:00 AM – 11:00 AM", activity: "Inauguration" },
  { time: "11:30 AM", activity: "Hackathon Kick-off" },
  { time: "01:30 PM – 02:30 PM", activity: "Lunch" },
  { time: "04:30 PM", activity: "Snacks" },
  { time: "05:00 PM – 06:30 PM", activity: "Cultural Activities" },
  { time: "07:30 PM – 08:30 PM", activity: "Dinner" },
];

const scheduleDay2 = [
  { time: "12:00 AM", activity: "Midnight Snack distribution with unlimited Tea/Coffee stationed" },
  { time: "07:30 AM – 08:30 AM", activity: "Breakfast" },
  { time: "11:30 AM", activity: "Conclusion of Hackathon" },
  { time: "11:30 AM – 01:00 PM", activity: "Evaluation" },
  { time: "02:00 PM – 04:00 PM", activity: "Valedictory Event" },
  { time: "04:00 PM", activity: "Snacks" },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 px-4 circuit-bg">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-6">Event Schedule</h2>
        <p className="text-center text-foreground/60 text-lg mb-16 max-w-2xl mx-auto">
          Plan your time at HACKFINITY. Don't miss out on anything.
        </p>

        <div className="max-w-4xl mx-auto glass-card overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="font-orbitron text-2xl font-bold text-center text-primary glow-text">
              ITINERARY OF THE EVENT
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th className="w-1/3">TIME</th>
                  <th className="w-2/3">ACTIVITY</th>
                </tr>
              </thead>
              <tbody>
                {/* Day 1 Header */}
                <tr>
                  <td colSpan={2} className="day-header">
                    13th February, 2026 (Day 1)
                  </td>
                </tr>
                {scheduleDay1.map((item, index) => (
                  <tr key={`day1-${index}`} className="hover:bg-primary/5 transition-colors">
                    <td className="font-orbitron text-primary font-medium">
                      {item.time}
                    </td>
                    <td className="text-foreground/80">{item.activity}</td>
                  </tr>
                ))}

                {/* Day 2 Header */}
                <tr>
                  <td colSpan={2} className="day-header">
                    14th February, 2026 (Day 2)
                  </td>
                </tr>
                {scheduleDay2.map((item, index) => (
                  <tr key={`day2-${index}`} className="hover:bg-primary/5 transition-colors">
                    <td className="font-orbitron text-primary font-medium">
                      {item.time}
                    </td>
                    <td className="text-foreground/80">{item.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
