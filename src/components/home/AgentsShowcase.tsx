"use client";

import { Card, Grid, Spacer, Tag, Text } from '@geist-ui/core';
import { agentProfiles } from '@/lib/data/home';

export default function AgentsShowcase() {
  return (
    <section id="agents">
      <Text h2 className="bengali-heading text-center">বাংলাদেশের জন্য ডিজাইন করা এজেন্টসমূহ</Text>
      <Text p className="bengali-text text-center">
        প্রতিটি এজেন্ট প্রি-বিল্ট টুলকিট, API কানেক্টর এবং মানব সহযোগিতার সমন্বয়ে তৈরি।
      </Text>
      <Spacer y={1.5} />
      <Grid.Container gap={2} justify="center">
        {agentProfiles.map((agent) => {
          const Icon = agent.icon;
          return (
            <Grid xs={24} md={8} key={agent.name}>
              <Card shadow width="100%" className="agent-card">
                <div className="agent-icon">
                  <Icon size={32} />
                </div>
                <Tag type="success" invert className="bengali-text">
                  {agent.persona}
                </Tag>
                <Spacer y={0.5} />
                <Text h3 className="bengali-heading">{agent.name}</Text>
                <Text className="bengali-text">{agent.description}</Text>
                <Spacer y={0.5} />
                <ul className="bengali-text feature-list">
                  {agent.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
    </section>
  );
}
