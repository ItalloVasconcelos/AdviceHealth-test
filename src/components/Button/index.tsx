import { Button } from "react-bootstrap";
type TSButton = {
  children: any;
  onClick?: any;
  variant?: string;
};
export const SButton = (props: TSButton) => {
  const { children, onClick, variant } = props;
  return (
    <div>
      <Button type="submit" variant={variant} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};
