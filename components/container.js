import { cx } from "@/utils/all";

import { Roboto } from 'next/font/google';

const Helvetica = Roboto({ 
  subsets: ['latin'],
  weight:["300","400", "500","700"],
  variable: '--font-roboto',
});

export default function Container(props) {
  return (
    <div
      className={cx(
        "container w-full max-w-full sm:max-w-[1536px] sm:mx-auto",
        props.className, `${Helvetica.variable}`
      )}>
      {props.children}
    </div>
  );
}
