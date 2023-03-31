import React from "react";
import { Col, Container, Image, Row, Table } from "react-bootstrap";
import {FcPhone} from 'react-icons/fc'
import {ImMobile} from 'react-icons/im'
// import {AiOutlineEmail} from 'react-icons/ai'


export default function Contact() {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Pizza Shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              inventore dolorem ab rem hic odio totam, numquam qui. Quaerat ea,
              ut aperiam molestiae voluptatibus cumque possimus sequi libero!
              Non, facilis adipisci voluptatem deleniti sint maxime eos.
              Similique, pariatur dignissimos aspernatur laboriosam asperiores
              totam tenetur dolore odit quae aperiam! Temporibus harum molestiae
              fugit amet atque vero possimus, labore corporis nesciunt placeat
              aspernatur quod maiores eligendi magni consequatur. Numquam, earum
              nisi qui libero, esse sed odio sapiente itaque sequi pariatur
              delectus natus minima necessitatibus illo in rem quae ea
              consequatur aperiam enim ipsa animi dolor voluptatem. Nesciunt
              deserunt velit saepe eligendi odio.
            </p>
            <Table striped bordered hover text-center>
      <thead>
        <tr>
          <th className="bg-warning">--- Contact Details ---</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><FcPhone/></td>
          <td>Phone</td>
          <td>0510-234567</td>
        </tr>
        <tr>
          <td><ImMobile/></td>
          <td>Call</td>
          <td>0510-234567</td>
        </tr>
        <tr>
          <td>Email icon</td>
          <td>Email</td>
          <td>help@email.com</td>
        </tr>
      </tbody>
    </Table>
          </Col>
          <Col md={6}>
          <Image src='image/farmhouse.jpg'/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
