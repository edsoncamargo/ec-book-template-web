import './button.component.scss';

import { ComponentProps, ReactNode } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'ec-button',
  variants: {
    variant: {
      cta: 'ec-button--cta',
      amazon: 'ec-button--amazon',
      americanas: 'ec-button--americanas',
      ml: 'ec-button--ml',
      ev: 'ec-button--ev',
      gp: 'ec-button--gp',
      rakuten: 'ec-button--rakuten',
      apple: 'ec-button--apple',
      vakinha: 'ec-button--vakinha',
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
