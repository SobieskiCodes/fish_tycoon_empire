import React, { useState } from 'react';
import { Mail, Cog, Timer, ShoppingCart, Users, Building, Plus } from 'lucide-react';
import MessageList from './MessageList';
import MessageReader from './MessageReader';
import { Message, MessageType } from './types';

const mockMessages: Message[] = [
  {
    id: '1',
    type: 'system',
    sender: 'System',
    subject: 'Welcome to Fish Tycoon Empire!',
    content: 'Welcome to the game! Here are some tips to get started...',
    timestamp: '2025-05-17 10:30 AM',
    read: false,
  },
  {
    id: '2',
    type: 'market',
    sender: 'Marketplace',
    subject: 'Your "Wild Guppy" has sold!',
    content: 'Congratulations! Your Wild Guppy has sold for 1,500 Gold.',
    timestamp: '2025-05-17 09:45 AM',
    read: false,
    attachment: {
      type: 'gold',
      name: 'Sale Proceeds',
      amount: 1500,
    },
  },
  {
    id: '3',
    type: 'task',
    sender: 'Task Manager',
    subject: 'Breeding Project Complete',
    content: 'Your Guppy breeding project has finished! Check your tanks to see the results.',
    timestamp: '2025-05-17 09:30 AM',
    read: true,
  },
  {
    id: '4',
    type: 'social',
    sender: 'FishMaster123',
    subject: 'Trading Request',
    content: 'Hey! Would you be interested in trading some rare guppies?',
    timestamp: '2025-05-17 09:00 AM',
    read: true,
  },
  {
    id: '5',
    type: 'company',
    sender: 'AquaCorp Pioneers',
    subject: 'Weekly Goals Updated',
    content: 'New company goals have been set for this week. Check them out!',
    timestamp: '2025-05-17 08:30 AM',
    read: true,
  },
];

const MailView: React.FC = () => {
  const [selectedType, setSelectedType] = useState<MessageType | 'all'>('all');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const filteredMessages = selectedType === 'all'
    ? messages
    : messages.filter(msg => msg.type === selectedType);

  const handleMarkAsRead = (messageId: string) => {
    setMessages(messages.map(msg =>
      msg.id === messageId ? { ...msg, read: true } : msg
    ));
  };

  const handleDeleteMessage = (messageId: string) => {
    setMessages(messages.filter(msg => msg.id !== messageId));
    if (selectedMessage?.id === messageId) {
      setSelectedMessage(null);
    }
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Mail className="h-8 w-8 text-blue-400" />
        <h1 className="text-2xl font-bold">Inbox: Mail & Alerts</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-gray-800 rounded-lg p-4">
            <button
              onClick={() => setSelectedType('all')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors mb-2 ${
                selectedType === 'all' ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <Mail className="h-5 w-5" />
              All Messages
            </button>

            <div className="space-y-1">
              <button
                onClick={() => setSelectedType('system')}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedType === 'system' ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                <Cog className="h-5 w-5" />
                System Alerts
              </button>
              <button
                onClick={() => setSelectedType('task')}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedType === 'task' ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                <Timer className="h-5 w-5" />
                Task Completions
              </button>
              <button
                onClick={() => setSelectedType('market')}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedType === 'market' ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                Market Notifications
              </button>
              <button
                onClick={() => setSelectedType('social')}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedType === 'social' ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                <Users className="h-5 w-5" />
                Social Mail
              </button>
              <button
                onClick={() => setSelectedType('company')}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedType === 'company' ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                <Building className="h-5 w-5" />
                Company News
              </button>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
            <Plus className="h-5 w-5" />
            Compose Message
          </button>
        </div>

        <div className="lg:col-span-3 bg-gray-800 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <MessageList
              messages={filteredMessages}
              selectedMessage={selectedMessage}
              onSelectMessage={setSelectedMessage}
              onMarkAsRead={handleMarkAsRead}
            />
            <MessageReader
              message={selectedMessage}
              onDelete={handleDeleteMessage}
              onMarkAsRead={handleMarkAsRead}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailView;