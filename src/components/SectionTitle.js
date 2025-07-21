import React from 'react';
import { Typography } from 'antd';

const SectionTitle = ({ id, children }) => (
  <div id={id} style={{ marginBottom: 32 }}>
    <Typography.Title level={2}>{children}</Typography.Title>
  </div>
);

export default SectionTitle;
