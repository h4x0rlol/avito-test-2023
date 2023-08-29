import { Select as AntdSelect, SelectProps } from 'antd';

export default function Select(props: SelectProps) {
  return (
    <AntdSelect
      showSearch={props.showSearch ?? true}
      style={{
        width: '100%',
        textAlign: 'left',
      }}
      allowClear={props.allowClear ?? true}
      placeholder={props.placeholder}
      optionFilterProp="children"
      filterOption={(input, option) =>
        String(option?.label ?? '')
          .toLowerCase()
          .includes(input.toLowerCase())
      }
      options={props.options ?? []}
    />
  );
}
