import React from "react";
import { Alert } from "react-bootstrap";

export default function Success({ success }) {
  return <Alert variant="success">{success}</Alert>;
}
