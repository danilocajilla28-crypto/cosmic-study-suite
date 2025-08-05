
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarContent, AvatarFallback } from '@/components/ui/avatar';
import { Send, Users, MessageSquare, Hash, Plus } from 'lucide-react';

const chatRooms = [
  { id: 1, name: 'SciEd313 - General', course: 'SciEd313', members: 45, unread: 3, color: 'bg-purple-500' },
  { id: 2, name: 'Phys314 - Lab Group', course: 'Phys314', members: 12, unread: 0, color: 'bg-indigo-500' },
  { id: 3, name: 'Phys315 - Study Group', course: 'Phys315', members: 8, unread: 7, color: 'bg-blue-500' },
  { id: 4, name: 'Bio313 - Discussion', course: 'Bio313', members: 52, unread: 2, color: 'bg-emerald-500' },
  { id: 5, name: 'Chem314 - Assignment Help', course: 'Chem314', members: 35, unread: 1, color: 'bg-amber-500' },
  { id: 6, name: 'Edu314 - Project Team', course: 'Edu314', members: 6, unread: 0, color: 'bg-rose-500' }
];

const messages = [
  {
    id: 1,
    user: 'Sarah Johnson',
    avatar: 'SJ',
    message: 'Hey everyone! Did anyone finish the lab report yet?',
    time: '10:30 AM',
    isOwn: false
  },
  {
    id: 2,
    user: 'Mike Chen',
    avatar: 'MC',
    message: 'I\'m still working on the calculations. The pendulum data is tricky!',
    time: '10:32 AM',
    isOwn: false
  },
  {
    id: 3,
    user: 'You',
    avatar: 'ME',
    message: 'I can help with that! I found a good formula online.',
    time: '10:35 AM',
    isOwn: true
  },
  {
    id: 4,
    user: 'Emma Davis',
    avatar: 'ED',
    message: 'That would be great! Can you share it?',
    time: '10:36 AM',
    isOwn: false
  }
];

const Chat = () => {
  const [selectedRoom, setSelectedRoom] = useState(chatRooms[0]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Course Chat
          </h1>
          <p className="text-muted-foreground mt-1">Connect with your classmates</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 neon-glow">
          <Plus className="w-4 h-4 mr-2" />
          New Group
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
        {/* Chat Rooms Sidebar */}
        <Card className="glass-card border-purple-500/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-purple-400 flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span>Chat Rooms</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {chatRooms.map((room) => (
                <div
                  key={room.id}
                  onClick={() => setSelectedRoom(room)}
                  className={`p-4 cursor-pointer transition-all duration-200 border-l-4 ${
                    selectedRoom.id === room.id
                      ? `${room.color} bg-purple-500/20 border-l-purple-500`
                      : 'border-l-transparent hover:bg-purple-500/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-white text-sm truncate">{room.name}</span>
                    {room.unread > 0 && (
                      <Badge variant="destructive" className="text-xs px-2 py-1">
                        {room.unread}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Users className="w-3 h-3" />
                    <span>{room.members} members</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <div className="lg:col-span-3 flex flex-col">
          {/* Chat Header */}
          <Card className="glass-card border-purple-500/20 mb-4">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${selectedRoom.color}`}></div>
                  <div>
                    <CardTitle className="text-white">{selectedRoom.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{selectedRoom.members} members online</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {selectedRoom.course}
                </Badge>
              </div>
            </CardHeader>
          </Card>

          {/* Messages */}
          <Card className="glass-card border-purple-500/20 flex-1 flex flex-col">
            <CardContent className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex space-x-3 ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    {!message.isOwn && (
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-xs">
                          {message.avatar}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className={`max-w-xs lg:max-w-md ${message.isOwn ? 'order-first' : ''}`}>
                      <div
                        className={`p-3 rounded-lg ${
                          message.isOwn
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white'
                            : 'bg-black/20 border border-white/10 text-white'
                        }`}
                      >
                        {!message.isOwn && (
                          <p className="text-xs text-purple-300 font-medium mb-1">{message.user}</p>
                        )}
                        <p className="text-sm">{message.message}</p>
                      </div>
                      <p className={`text-xs text-muted-foreground mt-1 ${message.isOwn ? 'text-right' : 'text-left'}`}>
                        {message.time}
                      </p>
                    </div>
                    {message.isOwn && (
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-xs">
                          {message.avatar}
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>

            {/* Message Input */}
            <div className="p-4 border-t border-purple-500/20">
              <div className="flex items-center space-x-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-black/20 border-purple-500/30"
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <Button 
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;
