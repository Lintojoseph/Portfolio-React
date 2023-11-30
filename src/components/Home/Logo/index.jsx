import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Controls, Timeline, Tween,PlayState } from 'react-gsap';
import LogoS from '../../../assets/images/logo-s.jpg';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();

  useEffect(() => {
    gsap.timeline().to(bgRef.current, {
      duration: 1,
      opacity: 1,
    });
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
    <Timeline target={<img className="solid-logo" src={LogoS} alt="JavaScript, Developer" />}>
      <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} />
      <Tween to={{ x: '200px' }} />
      <Tween to={{ rotation: 180 }} position="+=1" />
    </Timeline>
  </div>
  );
}

export default Logo;
