import * as Icons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const LucideIcon = ({ name, className = '', size = 24 }: LucideIconProps) => {
  // @ts-ignore - Dynamic icon access
  const Icon = Icons[name as keyof typeof Icons];

  if (!Icon) {
    // Fallback to Star icon if the specified icon doesn't exist
    return <Icons.Star className={className} size={size} />;
  }

  return <Icon className={className} size={size} />;
};
