import { Table } from "react-bootstrap"

type TSTable = {
    thHead: any;
    trBody: string;
}

export const STable = (props: TSTable) => {
    const {
        thHead,
        trBody
    } = props
    return (
        //     <div>
        //         <Table striped bordered hover>
        //             <thead>
        //                 <tr>
        //                     <th>{thHead}</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr>
        //                     <td>{trBody}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>2</td>
        //                     <td>Jacob</td>
        //                     <td>Thornton</td>
        //                     <td>@fat</td>
        //                 </tr>
        //                 <tr>
        //                     <td>3</td>
        //                     <td colSpan={2}>Larry the Bird</td>
        //                     <td>@twitter</td>
        //                 </tr>
        //             </tbody>
        //         </Table>
        //     </div>
        // 
        <></>)
}
