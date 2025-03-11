import { useState, useEffect, useRef, useMemo } from 'react';
import { animated, useTransition, SpringValue } from '@react-spring/web';

interface MasonryItem {
  id: number;
  name: string;
  html_url: string;
  image_url: string;
  height: number;
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  width: number;
}

interface MasonryProps {
  data: MasonryItem[];
}

// Definimos las propiedades que queremos recibir
type ExtendedAnimatedDivProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
> & {
  style: {
    height: number;
    width: SpringValue<number>;
    x: SpringValue<number>;
    y: SpringValue<number>;
    opacity: SpringValue<number>;
  };
};

// Convertimos animated.div pasando por unknown para forzar el cast
const ExtendedAnimatedDiv = animated.div as unknown as React.FC<ExtendedAnimatedDivProps>;

const Masonry: React.FC<MasonryProps> = ({ data }) => {
  const [columns, setColumns] = useState<number>(2);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia('(min-width: 1500px)').matches) {
        setColumns(5);
      } else if (window.matchMedia('(min-width: 1000px)').matches) {
        setColumns(4);
      } else if (window.matchMedia('(min-width: 600px)').matches) {
        setColumns(3);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  // Declaramos la constante para el ID de requestAnimationFrame con un valor inicial.
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
      // Ejemplo: podrías programar una animación de actualización en cada frame
      // animationFrameId.current = requestAnimationFrame(() => { /* lógica de animación */ });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      // Si se ha programado algún requestAnimationFrame, cancelarlo al desmontar el componente
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const [heights, gridItems] = useMemo<[number[], GridItem[]]>(() => {
    const heights = new Array(columns).fill(0);
    const gridItems = data.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height) - child.height;
      return {
        ...child,
        x,
        y,
        width: width / columns,
      };
    });
    return [heights, gridItems];
  }, [columns, data, width]);

  const transitions = useTransition<
    GridItem,
    { x: number; y: number; width: number; height: number; opacity: number }
  >(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div
      ref={ref}
      className="relative w-full h-full"
      style={{ height: Math.max(...heights) }}
    >
      {transitions((style, item) => (
        <a
          key={item.id}
          target="_blank"
          rel="noopener noreferrer"
          href={item.html_url}
        >
          <ExtendedAnimatedDiv
            key={item.id}
            style={{ ...style, height: item.height } as any}
            className="absolute p-[15px] [will-change:transform,width,height,opacity]"
          >
            <div
              className="relative w-full h-full overflow-hidden uppercase text-[10px] leading-[10px] rounded-[4px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] transition duration-300 ease hover:scale-110"
              style={{
                backgroundColor: '#ffffff',
                backgroundImage: `url(${item.image_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="w-full h-16 bg-linear-to-b from-amber-400/60">
                <h5 className="text-base p-2 leading-3 text-stone-800 font-medium font-[VictorMono-Bold]">
                  {item.name}
                </h5>
              </div>
            </div>
          </ExtendedAnimatedDiv>
        </a>
      ))}
    </div>
  );
};

export default Masonry;
