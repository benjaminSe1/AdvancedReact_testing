import App from './App';
import ReactDOM from "react-dom";

test('renders Hi There !', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain('Hi There !');
  ReactDOM.unmountComponentAtNode(div);
});
