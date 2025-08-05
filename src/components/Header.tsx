
import React from 'react';
import { Bell, Search, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Header = () => {
  return (
    <header className="h-16 glass-card border-b border-purple-500/20 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4 flex-1">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search courses, tasks, files..." 
            className="pl-10 bg-black/20 border-purple-500/30 focus:border-purple-400"
          />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-300">
          <Bell className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-300">
          <Settings className="w-5 h-5" />
        </Button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 neon-glow"></div>
      </div>
    </header>
  );
};
