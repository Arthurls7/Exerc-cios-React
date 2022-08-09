import React, { useState } from 'react';
import Form from "./Form.js"
import "./App.css"

export default function App() {
  const formName = "Formulário";

  return (
    <Form formName={formName} />
  )
}