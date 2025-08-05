
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Edit, Plus } from 'lucide-react';

const schedule = {
  Monday: [
    { time: '7:00 AM', subject: 'SciEd313', type: 'Lecture', room: 'Room 101', color: 'bg-purple-500' },
    { time: '10:00 AM', subject: 'Phys315', type: 'Lab', room: 'Lab 204', color: 'bg-blue-500' },
    { time: '4:00 PM', subject: 'Phys315', type: 'Tutorial', room: 'Room 305', color: 'bg-blue-500' },
    { time: '5:30 PM', subject: 'Bio313', type: 'Lecture', room: 'Room 201', color: 'bg-emerald-500' }
  ],
  Tuesday: [
    { time: '1:00 PM', subject: 'Chem314', type: 'Lecture', room: 'Room 401', color: 'bg-amber-500' },
    { time: '2:30 PM', subject: 'Phys314', type: 'Lecture', room: 'Room 301', color: 'bg-indigo-500' },
    { time: '4:00 PM', subject: 'Edu314', type: 'Discussion', room: 'Room 501', color: 'bg-rose-500' },
    { time: '5:30 PM', subject: 'Bio313', type: 'Lab', room: 'Lab 301', color: 'bg-emerald-500' }
  ],
  Wednesday: [
    { time: '9:00 AM', subject: 'Free Period', type: 'Study Time', room: 'Library', color: 'bg-gray-500' }
  ],
  Thursday: [
    { time: '7:00 AM', subject: 'SciEd313', type: 'Lecture', room: 'Room 101', color: 'bg-purple-500' },
    { time: '2:30 PM', subject: 'Phys314', type: 'Lab', room: 'Lab 204', color: 'bg-indigo-500' },
    { time: '4:00 PM', subject: 'Phys315', type: 'Tutorial', room: 'Room 305', color: 'bg-blue-500' },
    { time: '5:30 PM', subject: 'Bio313', type: 'Lecture', room: 'Room 201', color: 'bg-emerald-500' }
  ],
  Friday: [
    { time: '1:00 PM', subject: 'Chem314', type: 'Lab', room: 'Lab 401', color: 'bg-amber-500' },
    { time: '4:00 PM', subject: 'Edu314', type: 'Seminar', room: 'Room 501', color: 'bg-rose-500' },
    { time: '5:30 PM', subject: 'Bio313', type: 'Discussion', room: 'Room 201', color: 'bg-emerald-500' }
  ]
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const days = Object.keys(schedule);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Weekly Schedule
          </h1>
          <p className="text-muted-foreground mt-1">SCIED 3A - Current Semester</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 neon-glow">
          <Plus className="w-4 h-4 mr-2" />
          Add Class
        </Button>
      </div>

      {/* Day Navigation */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {days.map((day) => (
          <Button
            key={day}
            variant={selectedDay === day ? "default" : "outline"}
            onClick={() => setSelectedDay(day)}
            className={selectedDay === day 
              ? "bg-gradient-to-r from-purple-500 to-indigo-600 border-none whitespace-nowrap" 
              : "border-purple-500/30 text-gray-400 hover:text-purple-300 hover:border-purple-400 whitespace-nowrap"
            }
          >
            {day}
          </Button>
        ))}
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {/* Mobile/Tablet View - Single Day */}
        <div className="lg:hidden">
          <Card className="glass-card border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>{selectedDay}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schedule[selectedDay as keyof typeof schedule].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-black/20 border border-white/5 hover:border-purple-500/30 transition-all duration-200">
                    <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-white">{item.subject}</span>
                        <Badge variant="secondary" className="text-xs">{item.type}</Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{item.time}</span>
                        </div>
                        <span>{item.room}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Desktop View - Weekly Grid */}
        <div className="hidden lg:grid lg:col-span-7 lg:grid-cols-7 gap-4">
          {days.map((day) => (
            <Card key={day} className="glass-card border-purple-500/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-center text-sm font-medium text-purple-400">
                  {day}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {schedule[day as keyof typeof schedule].map((item, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg ${item.color} text-white text-xs hover:scale-105 transition-transform duration-200 cursor-pointer`}
                    >
                      <div className="font-medium mb-1">{item.subject}</div>
                      <div className="opacity-90 text-xs">{item.time}</div>
                      <div className="opacity-75 text-xs">{item.room}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Schedule Summary */}
      <Card className="glass-card border-indigo-500/20">
        <CardHeader>
          <CardTitle className="text-indigo-400">This Week's Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-400">20</div>
              <div className="text-sm text-muted-foreground">Total Classes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-400">6</div>
              <div className="text-sm text-muted-foreground">Subjects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">8</div>
              <div className="text-sm text-muted-foreground">Lab Sessions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400">25</div>
              <div className="text-sm text-muted-foreground">Credit Hours</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Schedule;
