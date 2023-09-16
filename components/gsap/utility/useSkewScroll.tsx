// utilities/useSkewScroll.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useSkewScroll = (containerRef: React.RefObject<HTMLElement>) => {
  const proxy = { skew: 0 };
  const skewSetter = gsap.quickSetter(containerRef.current, 'skewY', 'deg');
  const clamp = gsap.utils.clamp(-20, 20);

  ScrollTrigger.create({
    onUpdate: (self) => {
      const skew = clamp(self.getVelocity() / -300);
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, { skew: 0, duration: 0.8, ease: 'power3', overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
      }
    },
  });

  gsap.set('.skewElem', { transformOrigin: 'right center', force3D: true });
};

export default useSkewScroll;
