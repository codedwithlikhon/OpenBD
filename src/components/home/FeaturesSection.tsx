"use client";

import { Card, Grid, Spacer, Text } from '@geist-ui/core';
import { coreFeatures } from '@/lib/data/home';

export default function FeaturesSection() {
  return (
    <section id="platform">
      <Text h2 className="bengali-heading text-center">এজেন্ট প্ল্যাটফর্মের ক্ষমতা</Text>
      <Text p className="bengali-text text-center">
        ডিজাইন থেকে ডিপ্লয়মেন্ট পর্যন্ত প্রতিটি ধাপে OpenBD আপনাকে দেয় সম্পূর্ণ নিয়ন্ত্রণ, বিশ্লেষণ এবং স্কেল।
      </Text>
      <Spacer y={1.5} />
      <Grid.Container gap={2} justify="center">
        {coreFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <Grid xs={24} md={8} key={feature.title}>
              <Card shadow width="100%">
                <div className="feature-icon">
                  <Icon size={28} />
                </div>
                <Text h3 className="bengali-heading">{feature.title}</Text>
                <Text className="bengali-text" style={{ minHeight: '70px' }}>
                  {feature.description}
                </Text>
                <Spacer y={0.5} />
                <ul className="bengali-text feature-list">
                  {feature.highlights.map((item) => (
                    <li key={item}>{item}</li>
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
