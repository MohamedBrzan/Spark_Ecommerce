import { BsApple, BsFacebook } from 'react-icons/bs';
import './SocialMediaLinks.scss';
import { FcGoogle } from 'react-icons/fc';

export type SocialMediaIconsSize = {
  size: number;
};

const SocialMediaLinks = (props: SocialMediaIconsSize) => {
  const { size } = props;
  return (
    <div className='social_media_links'>
      <BsFacebook size={size} />
      <FcGoogle size={size} />
      <BsApple size={size} />
    </div>
  );
};

export default SocialMediaLinks;
