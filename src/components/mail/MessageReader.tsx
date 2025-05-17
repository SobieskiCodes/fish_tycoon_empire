import React from 'react';
import { Reply, Trash2, MailOpen, Coins, Package } from 'lucide-react';
import { Message } from './types';

interface MessageReaderProps {
  message: Message | null;
  onDelete: (messageId: string) => void;
  onMarkAsRead: (messageId: string) => void;
}

const MessageReader: React.FC<MessageReaderProps> = ({
  message,
  onDelete,
  onMarkAsRead,
}) => {
  if (!message) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        Select a message to read
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-1">{message.subject}</h2>
          <p className="text-sm text-gray-400">
            From: {message.sender}
          </p>
          <p className="text-xs text-gray-500">{message.timestamp}</p>
        </div>
        <div className="flex gap-2">
          {message.type === 'social' && (
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <Reply className="h-5 w-5 text-blue-400" />
            </button>
          )}
          <button
            onClick={() => onMarkAsRead(message.id)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <MailOpen className="h-5 w-5 text-blue-400" />
          </button>
          <button
            onClick={() => onDelete(message.id)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Trash2 className="h-5 w-5 text-red-400" />
          </button>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300">{message.content}</p>
      </div>

      {message.attachment && (
        <div className="mt-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-sm font-medium mb-2">Attachments</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {message.attachment.type === 'gold' ? (
                  <Coins className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Package className="h-5 w-5 text-blue-400" />
                )}
                <span className="text-sm">
                  {message.attachment.name}
                  {message.attachment.amount && (
                    <span className="text-gray-400">
                      : {message.attachment.amount.toLocaleString()}
                    </span>
                  )}
                </span>
              </div>
              <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors">
                Claim
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageReader;