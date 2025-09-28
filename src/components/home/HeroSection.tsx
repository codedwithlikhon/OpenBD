"use client";

import { Button, Card, Grid, Spacer, Tag, Text } from '@geist-ui/core';
import { ArrowRight, PlayCircle } from '@geist-ui/icons';
import { heroHighlights, platformMetrics } from '@/lib/data/home';

export default function HeroSection() {
  const scrollTo = (target: string) => () => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section>
      <Card shadow width="100%" className="hero-card">
        <Grid.Container gap={2} justify="center" alignItems="center">
          <Grid xs={24} md={14}>
            <Tag size="small" type="success" invert className="bengali-text">
              এআই এজেন্টিক প্ল্যাটফর্ম · বাংলাদেশ
            </Tag>
            <Spacer y={0.5} />
            <Text h1 className="bengali-heading" style={{ fontSize: '2.75rem' }}>
              OpenBD – বাংলাদেশের জন্য তৈরি এজেন্টিক AGI প্ল্যাটফর্ম
            </Text>
            <Spacer y={0.5} />
            <Text p className="bengali-text" style={{ fontSize: '1.1rem' }}>
              ব্যবসা, সরকার ও উদ্যোক্তাদের জন্য কনটেক্সট-অওয়্যার ডিজিটাল সহকারী তৈরি, স্থাপন ও নিয়ন্ত্রণ করুন। বাংলা ভাষায় স্বাভাবিক কথোপকথন, নিরাপদ ডেটা গভর্ন্যান্স এবং স্কেলযোগ্য অটোমেশন এখন একত্রে।
            </Text>
            <Spacer y={1} />
            <div className="flex gap-3 flex-wrap">
              <Button
                auto
                type="success"
                scale={1.2}
                shadow
                iconRight={<ArrowRight size={16} />}
                className="bengali-text"
                onClick={scrollTo('platform')}
              >
                প্ল্যাটফর্ম আবিষ্কার করুন
              </Button>
              <Button
                auto
                type="secondary"
                scale={1.2}
                ghost
                iconRight={<PlayCircle size={18} />}
                className="bengali-text"
                onClick={scrollTo('agents')}
              >
                এজেন্ট ডেমো দেখুন
              </Button>
            </div>
            <Spacer y={1.5} />
            <Grid.Container gap={2}>
              {heroHighlights.map((highlight) => (
                <Grid xs={24} sm={12} key={highlight}>
                  <Card shadow width="100%" className="bengali-text">
                    <Text small>{highlight}</Text>
                  </Card>
                </Grid>
              ))}
            </Grid.Container>
          </Grid>
          <Grid xs={24} md={10}>
            <Card shadow type="success" width="100%" className="metrics-card">
              <Text h3 className="bengali-heading text-center">বিশ্বাসের পরিসংখ্যান</Text>
              <Spacer y={1} />
              <Grid.Container gap={1} justify="center">
                {platformMetrics.map((metric) => (
                  <Grid xs={12} key={metric.label}>
                    <div className="metric">
                      <Text h2 style={{ marginBottom: 0 }}>{metric.value}</Text>
                      <Text className="bengali-text" style={{ fontWeight: 600 }}>
                        {metric.label}
                      </Text>
                      <Text small className="bengali-text" style={{ opacity: 0.8 }}>
                        {metric.detail}
                      </Text>
                    </div>
                  </Grid>
                ))}
              </Grid.Container>
            </Card>
          </Grid>
        </Grid.Container>
      </Card>
    </section>
  );
}
