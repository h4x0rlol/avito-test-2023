import { Select as AntdSelect, SelectProps } from 'antd';
import { useMediaQuery } from '../../hooks';

export default function Select(props: SelectProps) {
  const matches = useMediaQuery('(min-width: 1024px)');

  return (
    <AntdSelect
      showSearch={props.showSearch ?? true}
      size={props.size ?? 'large'}
      style={{
        width: '100%',
        height: '100%',
        minWidth: matches ? 300 : '0',
        textAlign: 'left',
        ...props.style,
      }}
      allowClear={props.allowClear ?? true}
      optionFilterProp="children"
      filterOption={(input, option) =>
        String(option?.label ?? '')
          .toLowerCase()
          .includes(input.toLowerCase())
      }
      options={props.options ?? []}
      {...props}
    />
  );
}
