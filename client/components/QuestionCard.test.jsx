/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionCard from './QuestionCard';


it('renders a button card', () => {
    render(<QuestionCard
        key='1'
        title='test title'
        description='test description'
        creator='test creator'
        chatURL='test url'
    />
    );
    const buttonElement = screen.getByText(/answer question/i); // Button itself
    const titleElement = screen.getByText(/test title/i);
    const description = screen.getByText(/test description/i);

    screen.debug();
});

// Check whether the button actually makes a GET request (to connect to the websockets server??)


