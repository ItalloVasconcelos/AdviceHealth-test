import Card from "react-bootstrap/Card";
type TSCard = {
  title: string;
  children: any;
  width?: number;
  height?: number;
  button?: any;
};
export const SCard = (props: TSCard) => {
  const { title, children, width, height, button } = props;

  return (
    <div>
      <Card style={{ width: `${width}rem`, height: `${height}rem` }}>
        <Card.Header
          style={{ display: "flex", justifyContent: "space-between" }}
          as="h3"
        >
          {title} {button}
        </Card.Header>
        <Card.Body>{children}</Card.Body>
      </Card>
    </div>
  );
};
