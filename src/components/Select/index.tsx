import { Select as AntdSelect, SelectProps } from 'antd';
import { useMediaQuery } from '../../hooks';
import { BREAKPOINTS } from '../../utils';

export default function Select(props: SelectProps) {
  const isLaptop = useMediaQuery(BREAKPOINTS.laptop);

  return (
    <AntdSelect
      showSearch={props.showSearch ?? true}
      size={props.size ?? 'large'}
      style={{
        width: '100%',
        height: '100%',
        minWidth: isLaptop ? 300 : '0',
        textAlign: 'left',
        ...props.style,
      }}
      allowClear={props.allowClear ?? true}
      optionFilterProp={props.optionFilterProp ?? 'children'}
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
