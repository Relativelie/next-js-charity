import { HomeHeader, HomeAbout, HomeInfo, AppGetStarted } from '@/components';
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
