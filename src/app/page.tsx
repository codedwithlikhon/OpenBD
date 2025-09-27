import MainLayout from '@/components/layout/MainLayout';
import { Text } from '@geist-ui/core';

export default function Home() {
  return (
    <MainLayout>
      <Text h1 className="bengali-heading text-center">
        OpenBD তে স্বাগতম
      </Text>
      <Text p className="bengali-text text-center">
        A cutting-edge AGI platform for Bangladesh.
      </Text>
    </MainLayout>
  );
}