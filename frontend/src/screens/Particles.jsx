import { useEffect, useMemo, useState, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { AnimatableColor, FullScreen } from "@tsparticles/engine";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticleScreen = memo(() => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useMemo(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);


  const options = useMemo(
    () => ({
    
        AnimatableColor: {
            AnimatableColor: {
                enable: false
            }
        },
      fullScreen: {
        zIndex: -1
      },
      background: {
        color: {
            value: "#000000",
        },
      },
      fpsLimit: 100,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: false
          }
        },
        modes: {
          push: {
            quantity: 1,
          },
        },
      },
      particles: {
        color: {
          value: "#bada55",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "outside",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 6,
          straight: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 40,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" options={options}> </Particles>;
  }

  return <></>;
});
ParticleScreen.displayName = "ParticleScreen";
export default ParticleScreen;