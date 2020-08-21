import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Card from "./card";

//react bootstrap
const threeCards = (titleDiv, threeDiv, title, arr, containerSpace) => 
    <div>
       <div className = {titleDiv}>
           <h3>{title}</h3>
       </div>
       <Container>
           <div className = {threeDiv}>
               <Row>
                   {arr.map(e => <Col className = "headGitCards" md={containerSpace}><Card key = {e.key} img = {e.img} title = {e.title} content = {e.content} btnSrc = {e.btnSrc} /></Col>)}
               </Row>
           </div>
       </Container>
   </div>


export default threeCards;
