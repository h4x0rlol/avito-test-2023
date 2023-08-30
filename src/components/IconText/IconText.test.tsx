import { render } from '@testing-library/react';
import { CheckCircleOutlined } from '@ant-design/icons';
import IconText from '.';
import { describe, expect, test } from 'vitest';

describe('IconText component Test', () => {
  test('Should render correctly', () => {
    const tree = render(<IconText icon={CheckCircleOutlined} text="test" />);

    expect(tree).toMatchSnapshot();
  });
});
