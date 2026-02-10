import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      className={cn('h-auto', props.className)}
      {...props}
    >
      <text
        x="10"
        y="35"
        fontFamily="var(--font-headline), sans-serif"
        fontSize="30"
        fontWeight="bold"
        fill="hsl(var(--primary))"
      >
        VVIOK
      </text>
      <text
        x="115"
        y="35"
        fontFamily="var(--font-body), sans-serif"
        fontSize="28"
        fill="hsl(var(--accent))"
      >
        Industry
      </text>
    </svg>
  );
}

export function MakeInIndiaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 60"
      className={cn('h-auto', props.className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M85.5,25.5c-0.2-0.8-0.5-1.5-0.8-2.2c-0.3-0.7-0.7-1.4-1.1-2c-0.4-0.6-0.9-1.2-1.4-1.7c-0.5-0.5-1.1-1-1.7-1.4 c-0.6-0.4-1.3-0.8-2-1.1c-0.7-0.3-1.4-0.6-2.2-0.8c-0.8-0.2-1.6-0.3-2.4-0.3H14.5c-0.8,0-1.6,0.1-2.4,0.3c-0.8,0.2-1.5,0.5-2.2,0.8 c-0.7,0.3-1.4,0.7-2,1.1c-0.6,0.4-1.2,0.9-1.7,1.4c-0.5,0.5-1,1.1-1.4,1.7c-0.4,0.6-0.8,1.3-1.1,2c-0.3,0.7-0.6,1.4-0.8,2.2 C2.7,26.3,2.6,27.1,2.6,28v4c0,0.9,0.1,1.7,0.3,2.5c0.2,0.8,0.5,1.5,0.8,2.2c0.3,0.7,0.7,1.4,1.1,2c0.4,0.6,0.9,1.2,1.4,1.7 c0.5,0.5,1.1,1,1.7,1.4c0.6,0.4,1.3,0.8,2,1.1c0.7,0.3,1.4,0.6,2.2,0.8c0.8,0.2,1.6,0.3,2.4,0.3h59.4c0.8,0,1.6-0.1,2.4-0.3 c0.8-0.2,1.5-0.5,2.2-0.8c0.7-0.3,1.4-0.7,2-1.1c0.6-0.4,1.2-0.9,1.7-1.4c0.5-0.5,1-1.1,1.4-1.7c0.4-0.6,0.8-1.3,1.1-2 c0.3-0.7,0.6-1.4,0.8-2.2c0.2-0.8,0.3-1.6,0.3-2.5v-4C85.8,27.1,85.7,26.3,85.5,25.5z"
      />
      <text
        x="50"
        y="38"
        fill="white"
        fontSize="10"
        fontWeight="bold"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        MAKE IN INDIA
      </text>
    </svg>
  );
}

export function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );
}
