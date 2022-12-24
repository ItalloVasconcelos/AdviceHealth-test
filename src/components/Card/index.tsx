
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
type TSCard = {
    title: string;
    children: any;
    size: number;
    button?: any

}
export const SCard = (props: TSCard) => {
    const {
        title,
        children,
        size,
        button

    } = props

    return (
        <div>
            <Card style={{ width: `${size}rem` }}>
                <Card.Header style={{ display: "flex", justifyContent: "space-between" }} as="h3" >{title} {button}
                </Card.Header>
                <Card.Body>
                    {children}
                </Card.Body>
            </Card></div>
    )
}
