/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen } from '@testing-library/react';
 import QuestionsContainer from './QuestionsContainer';

 it('renders question cards', () => {
    let questions = 
    [
        {
            id: 2,
            title: "quest two",
            description: "How much wood could a woodchuck chuck",
            url: "Wed Aug 04 2021 14:19:26 GMT-0400 (Eastern Daylight Time)",
            isopen: false,
            isanswered: false,
            creator: 2
        },
        {
            id: 1,
            title: "first question!",
            description: "What's up?",
            url: "Wed Aug 04 2021 14:16:03 GMT-0400 (Eastern Daylight Time)",
            isopen: false,
            isanswered: false,
            creator: 2
        },
        {
            id: 3,
            title: "third question!",
            description: "What is up?",
            url: "Wed Aug 04 2021 14:16:25 GMT-0400 (Eastern Daylight Time)",
            isopen: true,
            isanswered: false,
            creator: 2
        }
    ];

    const mocked = jest.fn(x => 42 + x);

    render(<QuestionsContainer 
        questions={questions}
        handleSetCurrentChat={mocked}
    />);
    
    //count of question cards
    //expect 1 open question
    const openQuestions = screen.getAllByText(/join chat/i);
    expect(openQuestions).toHaveLength(1);
    //expect 2 empty rooms
    const closedQuestions = screen.getAllByText(/see chat history/i);
    expect(closedQuestions).toHaveLength(2);
    

    
})