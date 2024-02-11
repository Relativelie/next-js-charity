import { Card } from './Card';

type ActivitiesSkeletonProps = {
  limit: number;
};

const ActivitiesSkeleton: React.FC<ActivitiesSkeletonProps> = ({ limit }) => {
  const getCardsList = () => {
    const cards = [];
    for (let i = 0; i < limit; i++) {
      cards.push(<Card key={i} />);
    }

    return cards;
  };

  return (
    <div className="flex flex-col items-center gap-10 pb-10 pt-4">
      <div className="grid w-2/3 grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] grid-rows-2 gap-5">
        {...getCardsList()}
      </div>

      <div role="status" className="flex animate-pulse justify-center gap-4">
        <div className="h-8 w-8 rounded-full bg-quinary" />
        <div className="h-8 w-8 rounded-full bg-quinary" />
      </div>
    </div>
  );
};

export default ActivitiesSkeleton;
