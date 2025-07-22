import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button, Typography, Grid } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import ThemeToggle from './ThemeToggle';

const { useBreakpoint } = Grid;

const { Header } = Layout;

const menuItems = [
  { key: 'sobre-mi', label: 'Sobre mí' },
  { key: 'habilidades', label: 'Habilidades' },
  { key: 'portafolio', label: 'Portafolio' },
  { key: 'educacion', label: 'Educación' },
  { key: 'contacto', label: 'Contacto' },
];

const HeaderNav = ({ isDark, onToggleTheme }) => {
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    const el = document.getElementById(e.key);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const menu = (
    <Menu
      mode={screens.md ? 'horizontal' : 'vertical'}
      items={menuItems}
      onClick={handleClick}
      selectable={false}
    />
  );

  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 10, width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography.Text strong style={{ color: 'inherit', fontSize: 18 }}>
          Julio C. Canelón
        </Typography.Text>
        {screens.md ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {menu}
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          </div>
        ) : (
          <div>
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setOpen(true)}
              aria-label="Menú"
            />
            <Drawer
              title="Menú"
              placement="right"
              onClose={() => setOpen(false)}
              open={open}
            >
              {menu}
            </Drawer>
          </div>
        )}
      </div>
    </Header>
  );
};

export default HeaderNav;
