import MainLayout from '@/components/layout/MainLayout';
import AgentsShowcase from '@/components/home/AgentsShowcase';
import CallToAction from '@/components/home/CallToAction';
import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import LanguageSection from '@/components/home/LanguageSection';
import WorkflowSection from '@/components/home/WorkflowSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <LanguageSection />
      <AgentsShowcase />
      <CallToAction />
    </MainLayout>
  );
}