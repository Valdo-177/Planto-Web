import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  children?: React.ReactNode;
  texto: string;
  Position: 'left' | 'right' | 'bottom' | 'top';
}

const Tooltip: React.FC<TooltipProps> = ({ children, texto, Position }) => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState('');
  const tooltipRef = useRef<HTMLDivElement>(null);
  const ChildRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };
  
  useEffect(() => {
    switch (Position) {
      case 'left':
        setPosition('-left-10 -bottom-11')
        break;
      case 'right':
        setPosition('-right-[144px] -bottom-[2rem] w-[8rem]')
        break;
    
      default:
        break;
    }
    console.log(ChildRef.current?.clientWidth)
  }, [])
  

  return (
    <div 
      className="relative flex"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{
        width: `${ChildRef.current?.clientWidth}px`
      }}
    >
      <div className='flex' ref={ChildRef}>{children}</div>
      {show && (
        <div ref={tooltipRef} onMouseEnter={handleMouseLeave} className={`${position} absolute z-50 bg-[#ffffff1a] rounded-lg shadow-md p-2 text-sm cursor-pointer`}>
          {texto}
        </div>
      )} 
    </div>
  );
};

export default Tooltip;
