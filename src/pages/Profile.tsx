
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { QrCode, Share, Edit, Camera, Award, BookOpen, Target } from 'lucide-react';

const Profile = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Profile
          </h1>
          <p className="text-muted-foreground mt-1">Manage your academic profile</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
            <QrCode className="w-4 h-4 mr-2" />
            QR Code
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
            <Share className="w-4 h-4 mr-2" />
            Share Profile
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <Card className="glass-card border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-purple-400">Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center">
              <div className="relative">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-2xl">
                    JD
                  </AvatarFallback>
                </Avatar>
                <Button 
                  size="sm" 
                  className="absolute bottom-4 -right-2 rounded-full w-8 h-8 p-0 bg-purple-500 hover:bg-purple-600"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">John Doe</h2>
              <Badge variant="outline" className="mb-4">SCIED 3A</Badge>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="student-id">Student ID</Label>
                <Input 
                  id="student-id" 
                  defaultValue="2021-00123" 
                  readOnly 
                  className="bg-black/20 border-purple-500/30"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  defaultValue="john.doe@university.edu" 
                  className="bg-black/20 border-purple-500/30"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone" 
                  defaultValue="+1 (555) 123-4567" 
                  className="bg-black/20 border-purple-500/30"
                />
              </div>
              <div>
                <Label htmlFor="year-level">Year Level</Label>
                <Input 
                  id="year-level" 
                  defaultValue="3rd Year" 
                  className="bg-black/20 border-purple-500/30"
                />
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Academic Stats */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass-card border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-indigo-400">Academic Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">3.8</div>
                  <div className="text-sm text-muted-foreground">GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">6</div>
                  <div className="text-sm text-muted-foreground">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">24</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">12</div>
                  <div className="text-sm text-muted-foreground">Pending</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="glass-card border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-amber-400 flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-black/20 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Dean's List</p>
                    <p className="text-sm text-muted-foreground">Fall 2023</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-black/20 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Perfect Attendance</p>
                    <p className="text-sm text-muted-foreground">Spring 2023</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-black/20 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Top Performer</p>
                    <p className="text-sm text-muted-foreground">Physics Lab</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-black/20 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Research Excellence</p>
                    <p className="text-sm text-muted-foreground">Biology Project</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Courses */}
          <Card className="glass-card border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-emerald-400">Current Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { code: 'SciEd313', name: 'Science Education Methods', progress: 75 },
                  { code: 'Phys314', name: 'Advanced Physics', progress: 68 },
                  { code: 'Phys315', name: 'Physics Laboratory', progress: 82 },
                  { code: 'Bio313', name: 'General Biology', progress: 71 },
                  { code: 'Chem314', name: 'Organic Chemistry', progress: 79 },
                  { code: 'Edu314', name: 'Educational Psychology', progress: 85 }
                ].map((course, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white">{course.code}</span>
                      <span className="text-sm text-muted-foreground">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-black/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
