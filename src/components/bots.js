import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import React from 'react';

//https://www.geeksforgeeks.org/how-to-add-chatbot-in-reactjs-project/ 
const steps = [
    {
        id: '0',
        message: 'Hey Geek!',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'View Gokart Courses' },
            { value: 2, label: 'View Gokart Events' },
            { value: 3, label: 'Infos about Circuit' },
            { value: 4, label: 'Talk to an agent' },
 
        ],
        end: true
    }
];
// Creating our own theme
const theme = {
    background: '#eee',
    headerBgColor: 'gray',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: 'Darkgray',
    userFontColor: 'white',
};
 
// Set some properties of the bot
const config = {
    botAvatar: '/images/4712109.png',
    floating: true,
};
function bots() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="GoKartBot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    );
}
 
export default bots;