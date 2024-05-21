import { Navigation } from '@/components/navigation';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
}
