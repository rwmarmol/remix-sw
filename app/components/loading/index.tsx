interface LoadingProps {
  className?: string;
}

export default function Loading({ className }: LoadingProps): JSX.Element {

  return (
    <div className={`loading ${className || ''}`}>
      <img className="loading-icon" src="/loading.svg" alt="loading"/>
    </div>
  );
};
 