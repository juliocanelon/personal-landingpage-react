import React from 'react';
import { Switch } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';

const ThemeToggle = ({ isDark, onToggle }) => (
  <Switch
    checked={isDark}
    onChange={onToggle}
    checkedChildren={<BulbFilled />}
    unCheckedChildren={<BulbOutlined />}
    aria-label="Toggle dark mode"
  />
);

export default ThemeToggle;
