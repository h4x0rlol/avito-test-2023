import { Select as AntdSelect, SelectProps } from 'antd';
import { useMediaQuery } from '../../hooks';
import { BREAKPOINTS } from '../../utils';

export default function Select(props: SelectProps) {
  const isTablet = useMediaQuery(BREAKPOINTS.tablet);

  return (
    <AntdSelect
      showSearch={props.showSearch ?? true}
      size={props.size ?? isTablet ? 'large' : 'middle'}
      style={{
        width: '100%',
        height: '100%',
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
