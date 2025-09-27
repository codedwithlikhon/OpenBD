"use client";
import { Grid, Card } from '@geist-ui/core';
import React from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={24} sm={20} md={16} lg={12}>
        <Card style={{ width: '100%', fontFamily: 'Kalpurush, sans-serif' }}>
          {children}
        </Card>
      </Grid>
    </Grid.Container>
  );
}