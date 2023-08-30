import { render } from '@testing-library/react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { describe, expect, test } from 'vitest';
import IconText from '.';

describe('IconText component test', () => {
  test('Should render correctly', () => {
    const tree = render(<IconText icon={CheckCircleOutlined} text="test" />);

    expect(tree).toMatchSnapshot();
  });
});
