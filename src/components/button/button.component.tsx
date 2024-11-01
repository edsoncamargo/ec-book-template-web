import './button.component.scss';

import { ComponentProps, ReactNode } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'pcn-button',
  variants: {
    variant: {
      cta: 'pcn-button--cta',
    },
  },
  defaultVariants: {
    variant: 'cta',
  },
});

type Props = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    children: ReactNode;
  };

export default function Button({ children, variant, ...rest }: Props) {
  const className = button({ variant });

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
