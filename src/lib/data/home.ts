import type { ReactElement } from 'react';
import {
  Activity,
  Cpu,
  Database,
  Globe,
  MessageCircle,
  Shield,
  Target,
  Users,
  Zap,
} from '@geist-ui/icons';

export type Feature = {
  title: string;
  description: string;
  icon: (props: { size?: number }) => ReactElement;
  highlights: string[];
};

export type WorkflowStep = {
  title: string;
  description: string;
  result: string;
  icon: (props: { size?: number }) => ReactElement;
};

export type AgentProfile = {
  name: string;
  description: string;
  persona: string;
  outcomes: string[];
  icon: (props: { size?: number }) => ReactElement;
};

export type LanguageCapability = {
  title: string;
  description: string;
  details: string[];
};

export type PlatformMetric = {
  value: string;
  label: string;
  detail: string;
};

export const heroHighlights: string[] = [
  'মাল্টি-এজেন্ট অর্কেস্ট্রেশনের মাধ্যমে জটিল কার্যপ্রবাহ পরিচালনা',
  'বাংলা এবং ইংরেজিতে দ্বিভাষিক প্রম্পট ও জ্ঞান ব্যবস্থাপনা',
  'নিরাপদ এন্টারপ্রাইজ-গ্রেড অবকাঠামো এবং সম্মতি নিশ্চয়তা',
];

export const platformMetrics: PlatformMetric[] = [
  { value: '120+', label: 'এন্টারপ্রাইজ ও সংস্থা', detail: 'বাংলাদেশের জুড়ে ডিজিটাল রূপান্তর ত্বরান্বিত করছে' },
  { value: '35M', label: 'বাংলা ডকুমেন্ট', detail: 'স্থানীয় প্রেক্ষিতের উপর প্রশিক্ষিত জ্ঞানভান্ডার' },
  { value: '24/7', label: 'এজেন্ট সহায়তা', detail: 'বৈশ্বিক সময় অঞ্চলের জন্য ক্রমাগত অপারেশন' },
];

export const coreFeatures: Feature[] = [
  {
    title: 'Agentic Workflow Studio',
    description: 'Drag-and-drop ইন্টারফেসে লজিক, সিদ্ধান্ত এবং টুল কল সমন্বয় করে স্বয়ংক্রিয় কার্যপ্রবাহ তৈরি করুন।',
    icon: Activity,
    highlights: [
      'রিয়েল-টাইম এজেন্ট মনিটরিং এবং জার্নালিং',
      'কন্ডিশনাল ব্রাঞ্চিং সহ ভিজ্যুয়াল স্টেট মেশিন',
      'ব্যবহারকারী অনুমোদন সহ মানব-ইন-দ্য-লুপ',
    ],
  },
  {
    title: 'Bengali Cognitive Engine',
    description: 'বাংলা ভাষার রূপভেদ, উপভাষা এবং কোড-মিক্সড ইনপুট বুঝতে বিশেষায়িত ভাষা মডেল।',
    icon: Globe,
    highlights: [
      'উচ্চ-নির্ভুল ট্রান্সলিটারেশন ও টোকেনাইজেশন',
      'নামীয় সত্তা সনাক্তকরণ এবং অনুভূতি বিশ্লেষণ',
      'বাংলা-ইংরেজি কনটেক্সট শেয়ারিং সহ স্মার্ট রিট্রিভাল',
    ],
  },
  {
    title: 'Autonomous Execution Guardrails',
    description: 'উন্নত নিরাপত্তা, পর্যবেক্ষণ এবং সম্মতির মাধ্যমে আপনার এজেন্টকে নিরাপদভাবে স্কেল করুন।',
    icon: Shield,
    highlights: [
      'নীতি মেনে চলা নিশ্চিত করতে কাস্টমাইজড সীমাবদ্ধতা',
      'ডাইনামিক ঝুঁকি স্কোরিং ও অ্যালার্টিং ড্যাশবোর্ড',
      'ISO 27001 ও ডেটা লোকালাইজেশন সম্মতি',
    ],
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    title: 'Understand',
    description: 'এজেন্ট দল বাংলা ও ইংরেজি তথ্য বিশ্লেষণ করে সংগঠিত জ্ঞান মানচিত্র তৈরি করে।',
    result: 'Context Graph তৈরি হয় যা সিদ্ধান্তের ভিত্তি তৈরি করে।',
    icon: Database,
  },
  {
    title: 'Plan',
    description: 'কৌশলগত পরিকল্পনা ইঞ্জিন টাস্কগুলিকে অগ্রাধিকার দেয় এবং দায়িত্ব বরাদ্দ করে।',
    result: 'মাল্টি-স্টেপ ব্লুপ্রিন্ট এবং টাইমলাইন জেনারেটেড হয়।',
    icon: Target,
  },
  {
    title: 'Orchestrate',
    description: 'ওয়ার্কফ্লো স্টুডিও টুল, API এবং মানব অনুমোদন একত্রিত করে কার্য সম্পাদন করে।',
    result: 'নিরবচ্ছিন্ন এজেন্ট সহযোগিতা এবং অভিযোজিত শিখন।',
    icon: Zap,
  },
  {
    title: 'Learn',
    description: 'ফিডব্যাক লুপ মডেলকে উন্নত করে এবং সাংগঠনিক জ্ঞানভান্ডারে যুক্ত করে।',
    result: 'সতত উন্নয়নশীল এজেন্ট দক্ষতা এবং কাস্টমাইজড অন্তর্দৃষ্টি।',
    icon: Cpu,
  },
];

export const agentProfiles: AgentProfile[] = [
  {
    name: 'স্মার্ট গভর্নেন্স এজেন্ট',
    persona: 'ডিজিটাল নীতি বিশেষজ্ঞ',
    description: 'সরকারি নীতি বিশ্লেষণ, নাগরিক পরিষেবা ফিডব্যাক এবং সংসদীয় জবাব প্রস্তুতিতে সহায়তা।',
    outcomes: [
      'নথি অনুবাদ এবং সারাংশ তৈরির সময় ৬৫% কমানো',
      'নাগরিক অভিযোগ ট্রায়াজে নির্ভুলতা বৃদ্ধি',
    ],
    icon: Users,
  },
  {
    name: 'ফাইন্যান্স অপস কো-পাইলট',
    persona: 'ঝুঁকি বিশ্লেষক ও রিপোর্টিং বিশেষজ্ঞ',
    description: 'ব্যাংকিং ও ফিনটেক সংস্থার জন্য জালিয়াতি শনাক্তকরণ, আর্থিক রিপোর্টিং এবং গ্রাহক সহায়তা স্বয়ংক্রিয় করা।',
    outcomes: [
      'ট্রানজেকশন পর্যবেক্ষণে ২৪/৭ প্রোঅ্যাকটিভ অ্যালার্ট',
      'বহুভাষিক গ্রাহক সহায়তায় গড় সাড়া সময় ৪০% হ্রাস',
    ],
    icon: Activity,
  },
  {
    name: 'উদ্যোক্তা পরামর্শক',
    persona: 'এসএমই গ্রোথ স্ট্র্যাটেজিস্ট',
    description: 'মাইক্রো ও ক্ষুদ্র উদ্যোক্তাদের জন্য বাজার বিশ্লেষণ, পণ্য কৌশল এবং ই-কমার্স সহায়তা।',
    outcomes: [
      'মার্কেট রিসার্চ রিপোর্ট প্রস্তুত করতে সময় ৫ গুণ কমানো',
      'স্বয়ংক্রিয় ক্রস-বর্ডার সোর্সিং সুপারিশ',
    ],
    icon: MessageCircle,
  },
];

export const languageCapabilities: LanguageCapability[] = [
  {
    title: 'বহু-উপভাষা সমর্থন',
    description: 'সিলেটি, চট্টগ্রামি এবং খুলনা উপভাষাসহ বাংলাদেশের আঞ্চলিক ভাষার উপর প্রশিক্ষিত মডেল।',
    details: [
      'স্বয়ংক্রিয় স্পেলিং নর্মালাইজেশন এবং লিপ্যন্তর',
      'ফোনেটিক মডেলিংয়ের মাধ্যমে গ্রামীণ উচ্চারণ বোঝার ক্ষমতা',
    ],
  },
  {
    title: 'ডকুমেন্ট বুদ্ধিমত্তা',
    description: 'স্ক্যান করা PDF, হস্তলিখিত ফর্ম এবং নোটিশ বোর্ড থেকে কাঠামোবদ্ধ তথ্য আহরণ।',
    details: [
      'OCR + ল্যাঙ্গুয়েজ মডেল সমন্বিত পোস্ট-প্রসেসিং',
      'বাংলা ফর্ম ফিল্ড সনাক্তকরণ ও ডেটা ভ্যালিডেশন',
    ],
  },
  {
    title: 'সাংস্কৃতিক বোধশক্তি',
    description: 'স্থানীয় রীতি, উৎসব, নীতি ও সামাজিক প্রেক্ষাপট বিবেচনায় রেখে পরামর্শ তৈরি।',
    details: [
      'জাতীয় ও আঞ্চলিক ছুটির ক্যালেন্ডার ইন্টিগ্রেশন',
      'সমাজ-সংবেদনশীল ভাষা এবং টোন অ্যাডাপ্টেশন',
    ],
  },
];
