interface MobileMenuItem {
  label: string;
  link: string;
  children?: { label: string; link: string }[];
}

interface MobileMenuProps {
  lang: string;
  items?: MobileMenuItem[];
  socialItems?: { label: string; link: string }[];
}

export default function MobileMenu(props: MobileMenuProps): JSX.Element;
