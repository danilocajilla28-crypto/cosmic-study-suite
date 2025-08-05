
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Search, Filter, Calendar, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const initialTasks = [
  {
    id: 1,
    title: 'Physics Lab Report - Pendulum Experiment',
    course: 'Phys315',
    type: 'Lab Report',
    priority: 'high',
    status: 'pending',
    dueDate: '2024-01-15',
    description: 'Complete analysis of simple pendulum experiment data'
  },
  {
    id: 2,
    title: 'Biology Research Paper',
    course: 'Bio313',
    type: 'Research Paper',
    priority: 'medium',
    status: 'in-progress',
    dueDate: '2024-01-20',
    description: 'Write a 10-page paper on cellular respiration'
  },
  {
    id: 3,
    title: 'Chemistry Problem Set #5',
    course: 'Chem314',
    type: 'Assignment',
    priority: 'low',
    status: 'pending',
    dueDate: '2024-01-25',
    description: 'Complete problems 1-15 from chapter 8'
  },
  {
    id: 4,
    title: 'Education Psychology Presentation',
    course: 'Edu314',
    type: 'Presentation',
    priority: 'high',
    status: 'done',
    dueDate: '2024-01-10',
    description: 'Present on learning theories and their applications'
  },
  {
    id: 5,
    title: 'Science Teaching Methods Case Study',
    course: 'SciEd313',
    type: 'Case Study',
    priority: 'medium',
    status: 'pending',
    dueDate: '2024-01-18',
    description: 'Analyze effective teaching strategies for science education'
  }
];

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('dueDate');
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredTasks = tasks
    .filter(task => {
      if (filter === 'all') return true;
      return task.status === filter;
    })
    .filter(task => 
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.course.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'dueDate') return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      if (sortBy === 'priority') {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority as keyof typeof priorityOrder] - priorityOrder[a.priority as keyof typeof priorityOrder];
      }
      return 0;
    });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done': return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case 'in-progress': return <Clock className="w-4 h-4 text-indigo-500" />;
      default: return <AlertTriangle className="w-4 h-4 text-amber-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      default: return 'secondary';
    }
  };

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: task.status === 'done' ? 'pending' : 'done' }
        : task
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Task Management
          </h1>
          <p className="text-muted-foreground mt-1">Stay organized with your assignments</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 neon-glow">
              <Plus className="w-4 h-4 mr-2" />
              Add Task
            </Button>
          </DialogTrigger>
          <DialogContent className="glass-card border-purple-500/20">
            <DialogHeader>
              <DialogTitle className="text-purple-400">Create New Task</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="task-title">Task Title</Label>
                <Input id="task-title" placeholder="Enter task title" className="bg-black/20 border-purple-500/30" />
              </div>
              <div>
                <Label htmlFor="task-course">Course</Label>
                <Select>
                  <SelectTrigger className="bg-black/20 border-purple-500/30">
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SciEd313">SciEd313</SelectItem>
                    <SelectItem value="Phys314">Phys314</SelectItem>
                    <SelectItem value="Phys315">Phys315</SelectItem>
                    <SelectItem value="Bio313">Bio313</SelectItem>
                    <SelectItem value="Chem314">Chem314</SelectItem>
                    <SelectItem value="Edu314">Edu314</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="task-description">Description</Label>
                <Textarea id="task-description" placeholder="Task description" className="bg-black/20 border-purple-500/30" />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600">
                Create Task
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters and Search */}
      <Card className="glass-card border-purple-500/20">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search tasks..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black/20 border-purple-500/30"
              />
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full md:w-48 bg-black/20 border-purple-500/30">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tasks</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="done">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48 bg-black/20 border-purple-500/30">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dueDate">Due Date</SelectItem>
                <SelectItem value="priority">Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Task Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card border-purple-500/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">{tasks.filter(t => t.status === 'pending').length}</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </CardContent>
        </Card>
        <Card className="glass-card border-indigo-500/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-indigo-400">{tasks.filter(t => t.status === 'in-progress').length}</div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </CardContent>
        </Card>
        <Card className="glass-card border-emerald-500/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400">{tasks.filter(t => t.status === 'done').length}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </CardContent>
        </Card>
        <Card className="glass-card border-amber-500/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-amber-400">{tasks.filter(t => t.priority === 'high').length}</div>
            <div className="text-sm text-muted-foreground">High Priority</div>
          </CardContent>
        </Card>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <Card key={task.id} className="glass-card border-purple-500/20 hover:neon-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Checkbox 
                  checked={task.status === 'done'}
                  onCheckedChange={() => toggleTask(task.id)}
                  className="mt-1 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className={`font-semibold text-white ${task.status === 'done' ? 'line-through opacity-60' : ''}`}>
                        {task.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(task.status)}
                      <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                        {task.priority}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium text-purple-400">{task.course}</span>
                      <Badge variant="outline" className="text-xs">
                        {task.type}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
