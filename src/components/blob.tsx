import { VariantProps, tv } from 'tailwind-variants';

import { ComponentProps } from 'react';

const blob = tv({
  base: 'pcn-blob',
  variants: {
    type: {
      primary: 'pcn-blob--primary',
      secondary: 'pcn-blob--secondary',
    },
  },
  defaultVariants: {
    type: 'primary',
  },
});

type Props = ComponentProps<'div'> & VariantProps<typeof blob>;

export default function Blob({ type }: Props) {
  const className = blob({ type });

  return (
    <div className={className}>
      <svg
        width='463'
        height='411'
        viewBox='0 0 463 411'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M376.408 126.983C397.074 167.945 441.753 190.442 456.566 221.494C471.92 252.827 456.304 293.517 428.378 318.199C400.17 343.422 358.831 352.896 324.734 352.384C290.357 352.414 262.682 342.177 228.361 356.668C194.321 370.617 154.175 409.575 123.609 410.208C93.5838 411.122 72.8562 374.251 49.3804 338.704C26.4461 303.437 -0.600171 269.473 0.45288 235.658C0.964485 201.562 28.7531 167.875 51.6277 134.387C73.6799 101.16 91.3596 68.4124 118.903 51.0917C146.165 34.3124 183.831 33.2406 226.295 21.6003C268.477 10.5015 315.457 -11.1657 337.533 8.53654C359.349 27.4164 356.283 86.3019 376.408 126.983Z'
          fill='url(#paint0_linear_22_22)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_22_22'
            x1='-54.381'
            y1='323.031'
            x2='552.903'
            y2='150.732'
            gradientUnits='userSpaceOnUse'
          >
            <stop className='pcn-blob__start' />
            <stop className='pcn-blob__end' offset='1' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
