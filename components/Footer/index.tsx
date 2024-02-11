import Github from '@/public/github.png';
import Linkedin from '@/public/linkedin.png';
import AnchorLink from './AnchorLink';

const Footer = () => {
  return (
    <footer className="flex items-center justify-around border-t-4 border-secondary bg-primary p-2">
      <div className="flex flex-col gap-2">
        <h5>My github and linkedin pages</h5>
        <div className="flex justify-center gap-4">
          <AnchorLink
            imageSrc={Linkedin}
            imgAlt="Linkedin logo"
            link="https://www.linkedin.com/in/gu-khabibullina/"
          />
          <AnchorLink
            imageSrc={Github}
            imgAlt="Github logo"
            link="https://www.linkedin.com/in/gu-khabibullina/"
          />
        </div>
      </div>
      <AnchorLink
        link="https://unsplash.com/"
        title="All images used from https://unsplash.com/"
      />
    </footer>
  );
};

export default Footer;
