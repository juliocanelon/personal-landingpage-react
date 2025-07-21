import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Grid, Layout, Menu, Typography } from 'antd';
import { useState } from 'react';
import { Link } from 'react-scroll';

const { Header } = Layout;
const { useBreakpoint } = Grid;

const items = [
  { key: 'sobre-mi', label: 'Sobre mí' },
  { key: 'habilidades', label: 'Habilidades' },
  { key: 'portafolio', label: 'Portafolio' },
  { key: 'contacto', label: 'Contacto' },
];

export default function Navbar() {
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);

  const menu = (
    <Menu mode={screens.md ? 'horizontal' : 'vertical'} selectable={false}>
      {items.map((item) => (
        <Menu.Item key={item.key}>
          <Link to={item.key} smooth duration={500} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 10, background: '#001529' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography.Text style={{ color: '#fff', fontSize: 18 }} strong>
          Julio Canelón
        </Typography.Text>
        {screens.md ? (
          menu
        ) : (
          <>
            <Button type="text" icon={<MenuOutlined />} onClick={() => setOpen(true)} />
            <Drawer placement="right" onClose={() => setOpen(false)} open={open} closable>
              {menu}
            </Drawer>
          </>
        )}
      </div>
    </Header>
  );
}
