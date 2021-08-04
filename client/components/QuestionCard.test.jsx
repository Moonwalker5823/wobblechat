/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionCard from './QuestionCard';

it('renders an open question card', () => {
    const mocked = jest.fn(x => 42 + x);
    render(<QuestionCard
        id='1'
        isopen={true}
        handleSetCurrentChat={mocked}
        key='1'
        title='test title'
        description='test description'
        creator='test creator'
        url='test url'
    />
    );
    const buttonElement = screen.getByText(/join chat/i); // Button itself
    const titleElement = screen.getByText(/test title/i);
    const description = screen.getByText(/test description/i);

    screen.debug();
});

it('renders a closed question card', () => {
    const mocked = jest.fn(x => 42 + x);
    render(<QuestionCard
        id='1'
        isopen={false}
        handleSetCurrentChat={mocked}
        key='1'
        title='test title'
        description='test description'
        creator='test creator'
        url='test url'
    />
    );
    const buttonElement = screen.getByText(/See chat history/i); // Button itself
    const titleElement = screen.getByText(/test title/i);
    const description = screen.getByText(/test description/i);

    screen.debug();
});

// Check whether the button actually makes a GET request (to connect to the websockets server??)