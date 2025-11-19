interface PequiIconProps {
  size?: number;
  className?: string;
}

export default function PequiIcon({ size = 32, className = "" }: PequiIconProps) {
  return (
    <div 
      className="inline-block"
      style={{
        backgroundColor: 'transparent',
        background: 'transparent',
        lineHeight: 0,
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img 
        src="/pequi.png" 
        alt="Pequi" 
        width={size} 
        height={size}
        className={`object-contain ${className}`}
        style={{
          backgroundColor: 'transparent',
          background: 'transparent',
          display: 'block',
          maxWidth: '100%',
          height: 'auto'
        }}
      />
    </div>
  );
}
