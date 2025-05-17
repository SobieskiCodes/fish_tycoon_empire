import React from 'react';
import { Cog, Timer, ShoppingCart, Users, Building, Circle } from 'lucide-react';
import { Message } from './types';

interface MessageListProps {
  messages: Message[];
  selectedMessage: Message | null;
  onSelectMessage: (message: Message) => void;
  onMarkAsRead: (messageId: string) => void;
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  selectedMessage,
  onSelectMessage,
  onMarkAsRead,
}) => {
  const getIcon = (type: Message['type']) => {
    switch (type) {
      case 'system':
        return <Cog className="h-5 w-5 text-gray-400" />;
      case 'task':
        return <Timer className="h-5 w-5 text-blue-400" />;
      case 'market':
        return <ShoppingCart className="h-5 w-5 text-green-400" />;
      case 'social':
        return <Users className="h-5 w-5 text-purple-400" />;
      case 'company':
        return <Building className="h-5 w-5 text-yellow-400" />;
    }
  };

  return (
    <div className="border-r border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Messages</h2>
          <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            Mark All Read
          </button>
        </div>
      </div>
      <div className="divide-y divide-gray-700">
        {messages.map((message) => (
          <button
            key={message.id}
            onClick={() => {
              onSelectMessage(message);
              if (!message.read) {
                onMarkAsRead(message.id);
              }
            }}
            className={`w-full text-left p-4 hover:bg-gray-700 transition-colors ${
              selectedMessage?.id === message.id ? 'bg-gray-700' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              {getIcon(message.type)}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`font-medium ${message.read ? 'text-gray-300' : 'text-white'}`}>
                    {message.sender}
                  </span>
                  {!message.read && (
                    <Circle className="h-2 w-2 fill-current text-blue-400" />
                  )}
                </div>
                <p className={`text-sm truncate ${message.read ? 'text-gray-400' : 'text-gray-300'}`}>
                  {message.subject}
                </p>
                <p className="text-xs text-gray-500">{message.timestamp}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MessageList;