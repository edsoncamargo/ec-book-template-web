import './button.component.scss';

import { ComponentProps, ReactNode } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'pcn-button',
  variants: {
    variant: {
      cta: 'pcn-button--cta',
      amazon: 'pcn-button--amazon',
      americanas: 'pcn-button--americanas',
      ml: 'pcn-button--ml',
      ev: 'pcn-button--ev',
      gp: 'pcn-button--gp',
      rakuten: 'pcn-button--rakuten',
      apple: 'pcn-button--apple',
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
