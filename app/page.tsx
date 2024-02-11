import { AppGetStarted } from '@/components/shared';
import { HomeHeader, HomeAbout, HomeInfo } from '@/components/specific';
import { fragmentIds } from '@/lib/utils/fragmentIds';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeAbout />
        <HomeInfo />
        <section id={fragmentIds.home.getStarted}>
          <AppGetStarted />
        </section>
      </main>
    </>
  );
}
