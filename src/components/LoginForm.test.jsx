import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm.jsx';

describe('LoginForm', () => {
    test('displays an error message if password is missing', () => {
        render(<LoginForm />);

        const emailInput = screen.getByLabelText(/email/i);
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

        const submitButton = screen.getByText(/login/i);
        fireEvent.click(submitButton);

        expect(screen.getByText(/email and password fields are required/i)).toBeInTheDocument();
    });

    test('displays an error message if email is missing', () => {
        render(<LoginForm />);

        const passwordInput = screen.getByLabelText(/password/i);
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        const submitButton = screen.getByText(/login/i);
        fireEvent.click(submitButton);

        expect(screen.getByText(/email and password fields are required/i)).toBeInTheDocument();
    });

    test('displays success message if both email and password are provided', () => {
        render(<LoginForm />);

        const emailInput = screen.getByLabelText(/email/i);
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

        const passwordInput = screen.getByLabelText(/password/i);
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        const submitButton = screen.getByText(/login/i);
        fireEvent.click(submitButton);

        expect(screen.getByText(/successfully logged in/i)).toBeInTheDocument();
    });
});
