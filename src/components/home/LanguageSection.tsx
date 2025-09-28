"use client";

import { Card, Grid, Spacer, Text } from '@geist-ui/core';
import { languageCapabilities } from '@/lib/data/home';

export default function LanguageSection() {
  return (
    <section>
      <Card shadow width="100%" className="language-card">
        <Text h2 className="bengali-heading text-center">বাংলা ভাষার জন্য সূক্ষ্মভাবে অনুকূলিত</Text>
        <Text p className="bengali-text text-center">
          শূন্য থেকে ডিজাইন করা ভাষা পাইপলাইন যে কোনো বাংলা কনটেন্টকে দ্রুত ডিজিটাইজ, বিশ্লেষণ ও অ্যাকশনে রূপান্তর করে।
        </Text>
        <Spacer y={1.5} />
        <Grid.Container gap={2} justify="center">
          {languageCapabilities.map((capability) => (
            <Grid xs={24} md={8} key={capability.title}>
              <Card shadow width="100%">
                <Text h3 className="bengali-heading">{capability.title}</Text>
                <Text className="bengali-text">{capability.description}</Text>
                <Spacer y={0.5} />
                <ul className="bengali-text feature-list">
                  {capability.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Card>
    </section>
  );
}
