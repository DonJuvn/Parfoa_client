import React, { useState } from 'react';

export default function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://parfua.pythonanywhere.com/api/api/check/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input })
      });

      const data = await response.json();
      const aiMessage = { sender: 'ai', text: data.message };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'ai', text: '⚠️ Error contacting AI.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div style={styles.container}>
      <h2>Parfoa AI ассистент</h2>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.sender === 'user' ? '#d1e7dd' : '#e2e3e5'
            }}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div style={{ ...styles.message, fontStyle: 'italic' }}>...</div>}
      </div>
      <div style={styles.inputBox}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '90%',
   //  maxWidth: 500,
    margin: '40px auto',
    padding: 16,
    border: '1px solid #ccc',
    borderRadius: 8,
    fontFamily: "'EB Garamond', serif"
  },
  chatBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    height: 300,
    overflowY: 'auto',
    border: '1px solid #ddd',
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
    backgroundColor: '#f9f9f9'
  },
  message: {
    padding: '8px 12px',
    borderRadius: 16,
    maxWidth: '80%',
    fontFamily: "'EB Garamond', serif"
  },
  inputBox: {
    display: 'flex',
    gap: 8
  },
  input: {
    flex: 1,
    padding: 8,
    borderRadius: 4,
    border: '1px solid #aaa'
  },
  button: {
    padding: '8px 16px',
    borderRadius: 4,
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
};
