
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Search, FolderOpen, FileText, Image, Download, Eye, MoreHorizontal } from 'lucide-react';

const files = [
  {
    id: 1,
    name: 'Physics_Lab_Report_1.pdf',
    type: 'pdf',
    size: '2.4 MB',
    course: 'Phys315',
    uploadDate: '2024-01-10',
    category: 'Lab Report'
  },
  {
    id: 2,
    name: 'Biology_Cell_Structure.pptx',
    type: 'presentation',
    size: '5.1 MB',
    course: 'Bio313',
    uploadDate: '2024-01-09',
    category: 'Lecture Notes'
  },
  {
    id: 3,
    name: 'Chemistry_Formula_Sheet.pdf',
    type: 'pdf',
    size: '1.2 MB',
    course: 'Chem314',
    uploadDate: '2024-01-08',
    category: 'Reference'
  },
  {
    id: 4,
    name: 'Education_Theory_Mind_Map.jpg',
    type: 'image',
    size: '3.7 MB',
    course: 'Edu314',
    uploadDate: '2024-01-07',
    category: 'Study Material'
  },
  {
    id: 5,
    name: 'Science_Teaching_Methods.docx',
    type: 'document',
    size: '1.8 MB',
    course: 'SciEd313',
    uploadDate: '2024-01-06',
    category: 'Assignment'
  }
];

const courseColors: { [key: string]: string } = {
  'SciEd313': 'bg-purple-500',
  'Phys314': 'bg-indigo-500',
  'Phys315': 'bg-blue-500',
  'Bio313': 'bg-emerald-500',
  'Chem314': 'bg-amber-500',
  'Edu314': 'bg-rose-500'
};

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf': return <FileText className="w-8 h-8 text-red-500" />;
    case 'presentation': return <FileText className="w-8 h-8 text-orange-500" />;
    case 'document': return <FileText className="w-8 h-8 text-blue-500" />;
    case 'image': return <Image className="w-8 h-8 text-green-500" />;
    default: return <FileText className="w-8 h-8 text-gray-500" />;
  }
};

const Files = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFiles = files
    .filter(file => 
      file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      file.course.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(file => selectedCourse === 'all' || file.course === selectedCourse)
    .filter(file => selectedCategory === 'all' || file.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Course Files
          </h1>
          <p className="text-muted-foreground mt-1">Organize and access your study materials</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 neon-glow">
          <Upload className="w-4 h-4 mr-2" />
          Upload File
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="glass-card border-purple-500/20">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search files..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black/20 border-purple-500/30"
              />
            </div>
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger className="w-full md:w-48 bg-black/20 border-purple-500/30">
                <FolderOpen className="w-4 h-4 mr-2" />
                <SelectValue placeholder="All Courses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                <SelectItem value="SciEd313">SciEd313</SelectItem>
                <SelectItem value="Phys314">Phys314</SelectItem>
                <SelectItem value="Phys315">Phys315</SelectItem>
                <SelectItem value="Bio313">Bio313</SelectItem>
                <SelectItem value="Chem314">Chem314</SelectItem>
                <SelectItem value="Edu314">Edu314</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 bg-black/20 border-purple-500/30">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Lab Report">Lab Reports</SelectItem>
                <SelectItem value="Lecture Notes">Lecture Notes</SelectItem>
                <SelectItem value="Assignment">Assignments</SelectItem>
                <SelectItem value="Reference">Reference</SelectItem>
                <SelectItem value="Study Material">Study Material</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Storage Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card border-purple-500/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">{files.length}</div>
            <div className="text-sm text-muted-foreground">Total Files</div>
          </CardContent>
        </Card>
        <Card className="glass-card border-indigo-500/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-indigo-400">48.2</div>
            <div className="text-sm text-muted-foreground">MB Used</div>
          </CardContent>
        </Card>
        <Card className="glass-card border-emerald-500/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400">6</div>
            <div className="text-sm text-muted-foreground">Courses</div>
          </CardContent>
        </Card>
        <Card className="glass-card border-amber-500/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-amber-400">1.8</div>
            <div className="text-sm text-muted-foreground">GB Available</div>
          </CardContent>
        </Card>
      </div>

      {/* Files Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFiles.map((file) => (
          <Card key={file.id} className="glass-card border-purple-500/20 hover:neon-glow transition-all duration-300 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  {getFileIcon(file.type)}
                  <div className={`w-3 h-3 rounded-full ${courseColors[file.course]}`}></div>
                </div>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-white text-sm truncate" title={file.name}>
                    {file.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{file.size}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {file.course}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {file.category}
                  </Badge>
                </div>

                <div className="text-xs text-muted-foreground">
                  Uploaded {new Date(file.uploadDate).toLocaleDateString()}
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Button variant="ghost" size="sm" className="flex-1 text-purple-400 hover:text-purple-300">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 text-indigo-400 hover:text-indigo-300">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Files;
