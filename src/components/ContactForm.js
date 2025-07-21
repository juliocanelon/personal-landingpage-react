import React from 'react';
import { Form, Input, Button, message, Space } from 'antd';
import SectionTitle from './SectionTitle';
import { MailOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { contactInfo } from '../data/contact';

const ContactForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    message.success('Gracias por tu mensaje');
    form.resetFields();
  };

  return (
    <section id="contacto">
      <SectionTitle>Contacto</SectionTitle>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 600, margin: '0 auto' }}
      >
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Email inválido' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mensaje"
          name="mensaje"
          rules={[{ required: true, min: 10, message: 'Mínimo 10 caracteres' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
      <Space size="large" style={{ marginTop: 24 }}>
        <a href={`mailto:${contactInfo.email}`} aria-label="Email">
          <MailOutlined style={{ fontSize: 24 }} />
        </a>
        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedinOutlined style={{ fontSize: 24 }} />
        </a>
        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GithubOutlined style={{ fontSize: 24 }} />
        </a>
      </Space>
    </section>
  );
};

export default ContactForm;
