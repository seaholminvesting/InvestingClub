import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Event } from "@/lib/utils";
import { motion } from "framer-motion";

const events: Event[] = [
  {
    id: 1,
    title: "Stock Market Competition Kickoff",
    description: "Launch of our 8-week stock market simulation challenge with prize opportunities.",
    date: "October 15, 2023",
    time: "3:30 PM - 5:00 PM",
    location: "Room 203",
    day: 15,
    month: "OCT"
  },
  {
    id: 2,
    title: "Guest Speaker: Investment Banking",
    description: "Special presentation by Sarah Chen, Investment Banking Associate at Goldman Sachs.",
    date: "October 22, 2023",
    time: "4:00 PM - 5:30 PM",
    location: "Auditorium",
    day: 22,
    month: "OCT"
  },
  {
    id: 3,
    title: "Workshop: Building Your First Portfolio",
    description: "Hands-on workshop to create a balanced investment portfolio. Bring your laptops!",
    date: "October 29, 2023",
    time: "3:30 PM - 5:00 PM",
    location: "Computer Lab",
    day: 29,
    month: "OCT"
  }
];

const EventList = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events & Reminders</h3>
          
          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div 
                key={event.id}
                className={`flex items-start ${index < events.length - 1 ? 'border-b border-gray-200 pb-6' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 bg-primary-50 rounded-lg p-3 mr-4">
                  <div className="text-center">
                    <span className="block text-primary font-bold text-xl">{event.day}</span>
                    <span className="block text-primary font-medium text-sm">{event.month}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{event.title}</h4>
                  <p className="text-gray-500 mb-1">{event.time} • {event.location}</p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="border-gray-300 hover:border-primary text-gray-800">
              View All Events
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventList;
