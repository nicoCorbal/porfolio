import * as Icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

type LucideIconComponent = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const LucideIcon = ({ name, className = '', size = 24 }: LucideIconProps) => {
  const Icon = (Icons as unknown as Record<string, LucideIconComponent>)[name];

  if (!Icon) {
    return <Icons.Star className={className} size={size} />;
  }

  return <Icon className={className} size={size} />;
};
