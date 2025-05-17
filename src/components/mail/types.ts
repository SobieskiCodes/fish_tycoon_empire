export type MessageType = 'system' | 'task' | 'market' | 'social' | 'company';

export interface Message {
  id: string;
  type: MessageType;
  sender: string;
  subject: string;
  content: string;
  timestamp: string;
  read: boolean;
  attachment?: {
    type: 'item' | 'gold';
    name: string;
    amount?: number;
  };
}