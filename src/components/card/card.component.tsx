import './card.component.scss';

import { ComponentProps, ReactNode } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const card = tv({
  base: 'pcn-card',
  variants: {
    variant: {
      left: 'pcn-card--left',
      right: 'pcn-card--right',
    },
  },
  defaultVariants: {
    variant: 'left',
  },
});

type Props = ComponentProps<'div'> &
  VariantProps<typeof card> & {
    children: ReactNode;
  };

export default function Card({ children, variant }: Props) {
  const className = card({ variant });
  return <div className={className}>{children}</div>;
}
