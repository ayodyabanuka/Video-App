import { ContainerScroll } from './scroll-animation';

const ScreenView = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
      <ContainerScroll>
        <img
          src={`/cam.jpg`}
          alt='hero'
          height={720}
          width={1400}
          className='mx-auto rounded-2xl object-cover h-full object-left-top'
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default ScreenView;
