
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, BookOpen, Clock, Users, FileText } from 'lucide-react';

const initialCourses = [
  {
    id: 1,
    code: 'SciEd313',
    name: 'Science Education Methods',
    instructor: 'Prof. Johnson',
    credits: 3,
    color: 'from-purple-500 to-purple-600',
    schedule: 'Mon 7:00 AM, Thu 7:00 AM',
    students: 45,
    files: 12
  },
  {
    id: 2,
    code: 'Phys314',
    name: 'Advanced Physics',
    instructor: 'Dr. Smith',
    credits: 4,
    color: 'from-indigo-500 to-indigo-600',
    schedule: 'Tue 2:30 PM, Thu 2:30 PM',
    students: 38,
    files: 8
  },
  {
    id: 3,
    code: 'Phys315',
    name: 'Physics Laboratory',
    instructor: 'Dr. Brown',
    credits: 2,
    color: 'from-blue-500 to-blue-600',
    schedule: 'Mon 10:00 AM, Thu 4:00 PM, Fri 4:00 PM',
    students: 25,
    files: 15
  },
  {
    id: 4,
    code: 'Bio313',
    name: 'General Biology',
    instructor: 'Prof. Davis',
    credits: 3,
    color: 'from-emerald-500 to-emerald-600',
    schedule: 'Mon 5:30 PM, Tue 5:30 PM, Thu 5:30 PM, Fri 5:30 PM',
    students: 52,
    files: 10
  },
  {
    id: 5,
    code: 'Chem314',
    name: 'Organic Chemistry',
    instructor: 'Dr. Wilson',
    credits: 4,
    color: 'from-amber-500 to-amber-600',
    schedule: 'Tue 1:00 PM, Fri 1:00 PM',
    students: 35,
    files: 18
  },
  {
    id: 6,
    code: 'Edu314',
    name: 'Educational Psychology',
    instructor: 'Prof. Taylor',
    credits: 3,
    color: 'from-rose-500 to-rose-600',
    schedule: 'Tue 4:00 PM, Fri 4:00 PM',
    students: 41,
    files: 7
  }
];

const Courses = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            My Courses
          </h1>
          <p className="text-muted-foreground mt-1">SCIED 3A - Current Semester</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 neon-glow">
              <Plus className="w-4 h-4 mr-2" />
              Add Course
            </Button>
          </DialogTrigger>
          <DialogContent className="glass-card border-purple-500/20">
            <DialogHeader>
              <DialogTitle className="text-purple-400">Add New Course</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="course-code">Course Code</Label>
                <Input id="course-code" placeholder="e.g., MATH101" className="bg-black/20 border-purple-500/30" />
              </div>
              <div>
                <Label htmlFor="course-name">Course Name</Label>
                <Input id="course-name" placeholder="e.g., Calculus I" className="bg-black/20 border-purple-500/30" />
              </div>
              <div>
                <Label htmlFor="instructor">Instructor</Label>
                <Input id="instructor" placeholder="e.g., Dr. Smith" className="bg-black/20 border-purple-500/30" />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600">
                Create Course
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="glass-card border-purple-500/20 hover:neon-glow transition-all duration-300 cursor-pointer group">
            <CardHeader className="pb-3">
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${course.color} mb-4`}></div>
              <CardTitle className="flex items-start justify-between">
                <div>
                  <span className="text-lg font-bold text-white">{course.code}</span>
                  <p className="text-sm text-muted-foreground font-normal mt-1">{course.name}</p>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {course.credits} CR
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="truncate">{course.schedule}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>{course.files} files</span>
                  </div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                className="w-full mt-4 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 group-hover:bg-purple-500/20"
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
