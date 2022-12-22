
import Card from 'react-bootstrap/Card';
type TSCard = {
    title: string;
    children: any;
    size: number;
}
export const SCard = (props: TSCard) => {
    const {
        title,
        children,
        size
    } = props

    return (
        <div>
            <Card style={{ width: `${size}rem` }}>
                <Card.Header as="h3" >{title}</Card.Header>
                <Card.Body>
                    {children}
                </Card.Body>
            </Card></div>
    )
}
