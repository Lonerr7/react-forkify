import s from './Container.module.scss';

type ContainerProps = {
  children: JSX.Element;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
