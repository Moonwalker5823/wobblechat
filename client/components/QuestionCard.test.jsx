import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionCard from './QuestionCard';

it('renders a question card', () => {
    render(<QuestionCard
                key='1'
                title='test title'
                description='test description'
                creator='test creator'
                chatURL='test url'
            />
    );
    const questionElement = screen.getByLabelText(/answer question/i);
    expect(questionElement).toBeInTheDocument();
});
