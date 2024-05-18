import React from 'react';

interface ChatInputProps {
    onSend: (input: string) => void;
    disabled: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
    const [input, setInput] = React.useState('');

    const handleSend = () => {
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={disabled}
            />
            <button onClick={handleSend} disabled={disabled}>
                Send
            </button>
        </div>
    );
};

export default ChatInput;

