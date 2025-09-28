"use client";

import Link from 'next/link';
import { Button, Page, Spacer, Text } from '@geist-ui/core';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const scrollTo = (target: string) => () => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const contactTeam = () => {
    window.location.href = 'mailto:team@openbd.ai';
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top, rgba(0, 106, 78, 0.15), transparent 60%)',
        padding: '2rem 0',
      }}
    >
      <Page dotBackdrop width="100%">
        <Page.Header>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Text h2 className="bengali-heading" style={{ margin: 0 }}>
                OpenBD
              </Text>
              <Text small className="bengali-text" style={{ marginTop: '-0.5rem' }}>
                এআই এজেন্টিক প্ল্যাটফর্ম
              </Text>
            </Link>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Button auto type="default" ghost onClick={scrollTo('platform')}>
                Platform
              </Button>
              <Button auto type="default" ghost onClick={scrollTo('agents')}>
                Agents
              </Button>
              <Button auto type="success" onClick={contactTeam}>
                Contact
              </Button>
            </div>
          </div>
        </Page.Header>
        <Page.Content style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {children}
        </Page.Content>
        <Page.Footer>
          <Spacer y={1} />
          <Text small className="bengali-text" style={{ textAlign: 'center', width: '100%' }}>
            ওপেন সোর্স AGI প্ল্যাটফর্ম – বাংলাদেশে মানব সম্ভাবনার প্রসারে নিবেদিত।
          </Text>
        </Page.Footer>
      </Page>
    </div>
  );
}