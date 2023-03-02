import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  href: string;
  classes: string;
  variant: ButtonVariant;
};
type ButtonVariant = 'primary' | 'secondary';

const buttonClasseNames: {
  [K in ButtonVariant]: string;
} = {
  // TODO: add tailwind classnames
  primary: '',
  secondary: '',
};

const getButtonClassNames = (classes: string, variant: ButtonVariant) => {
  return `${classes} ${buttonClasseNames[variant]}`;
};

const ButtonLink: React.FC<Props> = ({ children, href, classes, variant }) => (
  <Link className={classes} href={href}>
    {children}
  </Link>
);

export default ButtonLink;
