import Highlight from './Highlight';

import KidsCampImage from '@/public/kids-camp.jpg';
import SocialImage from '@/public/children-game.jpg';
import PaintingImage from '@/public/painting-kid.jpg';
import NatureImage from '@/public/nature-kid.jpg';

const HighlightList = () => {
  return (
    <div className="z-20 col-span-2 col-start-2 row-start-2 flex w-full justify-center gap-5">
      <Highlight
        src={SocialImage}
        title="Social Events"
        description="Bond with new friends over campfire stories, movie nights, and other social gatherings that promote camaraderie and friendship."
      />

      <Highlight
        src={PaintingImage}
        title="Creative Workshops"
        description="Unleash your creativity through painting, crafts, music, and drama workshops led by experienced instructors."
      />
      <Highlight
        src={NatureImage}
        title="Nature Adventures"
        description="Embark on nature walks, scavenger hunts, and camping adventures to connect with the great outdoors."
      />
      <Highlight
        src={KidsCampImage}
        title="Sports and Games"
        description="Develop teamwork, coordination, and sportsmanship through a variety of sports, games, and fitness activities."
      />
    </div>
  );
};

export default HighlightList;
