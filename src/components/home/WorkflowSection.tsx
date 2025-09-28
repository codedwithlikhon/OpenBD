"use client";

import { Card, Grid, Spacer, Tag, Text } from '@geist-ui/core';
import { workflowSteps } from '@/lib/data/home';

export default function WorkflowSection() {
  return (
    <section>
      <Card shadow width="100%" className="workflow-card">
        <Text h2 className="bengali-heading text-center">Agentic Workflow Lifecycle</Text>
        <Text p className="bengali-text text-center">
          পরিকল্পনা থেকে শেখা—OpenBD স্বয়ংক্রিয়ভাবে প্রতিটি চক্রে মূল্য ফিরিয়ে আনে।
        </Text>
        <Spacer y={1.5} />
        <Grid.Container gap={2} justify="center">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Grid xs={24} md={6} key={step.title}>
                <Card shadow width="100%" className="workflow-step">
                  <Tag type="secondary" invert>
                    {index + 1}
                  </Tag>
                  <Spacer y={0.5} />
                  <Icon size={30} />
                  <Spacer y={0.5} />
                  <Text h3 className="bengali-heading">{step.title}</Text>
                  <Text className="bengali-text">{step.description}</Text>
                  <Spacer y={0.5} />
                  <Text small className="bengali-text" style={{ fontWeight: 600 }}>
                    ফলাফল: {step.result}
                  </Text>
                </Card>
              </Grid>
            );
          })}
        </Grid.Container>
      </Card>
    </section>
  );
}
