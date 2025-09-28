"use client";

import { Button, Card, Spacer, Text } from '@geist-ui/core';
import { ArrowRight } from '@geist-ui/icons';

export default function CallToAction() {
  const openMail = () => {
    window.location.href = 'mailto:team@openbd.ai';
  };

  const openDocs = () => {
    window.open('https://docs.openbd.ai', '_blank', 'noopener,noreferrer');
  };

  return (
    <section>
      <Card shadow type="secondary" width="100%" className="cta-card">
        <Text h2 className="bengali-heading text-center">আজই আপনার এজেন্ট ইকোসিস্টেম তৈরি করুন</Text>
        <Text p className="bengali-text text-center">
          আমাদের বিশেষজ্ঞ দল আপনাকে আর্কিটেকচার ডিজাইন, কাস্টম মডেল ফাইনটিউন এবং নিরাপদভাবে ডিপ্লয়মেন্টে সহায়তা করবে।
        </Text>
        <Spacer y={1} />
        <div className="flex justify-center gap-3 flex-wrap">
          <Button
            auto
            type="success"
            scale={1.2}
            iconRight={<ArrowRight size={16} />}
            className="bengali-text"
            onClick={openMail}
          >
            ডেমো বুক করুন
          </Button>
          <Button
            auto
            type="default"
            scale={1.2}
            ghost
            className="bengali-text"
            onClick={openDocs}
          >
            টেকনিক্যাল ডকুমেন্টেশন
          </Button>
        </div>
      </Card>
    </section>
  );
}
