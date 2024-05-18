import React from 'react';

interface ChatMessageProps {
    text: string;
    from: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ text, from }) => {
    return (
        <div>
            <strong>{from}:</strong> {text}
        </div>
    );
};

export default ChatMessage;
