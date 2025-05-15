const { render, screen } = require('@testing-library/react');
const App = require('./App');

test('renders app component', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});