import { useState } from "react";
import { Form } from "react-bootstrap";

type TSForm = {
  controlID?: any;
  label: string;
  className?: any;
  type: string;
  placeholder?: string;
  name?: string;
  value?: any;
  as?: any;
  onChange?: any;
};

export const SForm = (props: TSForm) => {
  const {
    label,
    type,
    placeholder,
    controlID,
    className,
    name,
    value,
    as,
    onChange,
  } = props;
  return (
    <div>
      <Form>
        <Form.Group className={className} controlId={controlID}>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            as={as}
            onChange={onChange}
          />
        </Form.Group>

      </Form>
    </div>
  );
};

type TSFSelect = {
  label: string;
  children: any;
  name?: any;
  value?: any;
  onChange?: any;
};
export const SFormSelect = (props: TSFSelect) => {
  const { label, children, name, onChange, value } = props;
  const [values, setValues] = useState(new Array(length).fill(""));

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Select name={name} value={value} onChange={onChange}>
          {children}
          {values.map((index: any, i: any) => (
            <option>{values}</option>
          ))}
        </Form.Select>
      </Form.Group>
    </div>
  );
};
