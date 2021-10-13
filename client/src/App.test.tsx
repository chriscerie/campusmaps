import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

describe('App', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(<App />);
    expect(tree).toMatchSnapshot();
  });
});
