import { Form, Input, Button, message } from 'antd';

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success('¡Gracias por contactarme!');
    form.resetFields();
  };

  return (
    <section id="contacto">
      <Form form={form} layout="vertical" onFinish={onFinish} style={{ maxWidth: 600, margin: '0 auto' }}>
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[{ required: true, message: 'Ingresa tu nombre' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: 'email', required: true, message: 'Email inválido' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mensaje"
          name="mensaje"
          rules={[{ required: true, message: 'Escribe tu mensaje' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
