'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumb(){
  const path = usePathname();
  const pathSegments = path.split('/').filter(segment => segment !== '');

  return (
    <div className="text-sm text-gray-500 dark:text-gray-400 ml-2 capitalize">
      {pathSegments.map((segment, index) => (
        <span key={segment}>
          {index === 0 && ' > '}
          <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
            {segment}
          </Link>
          {index < pathSegments.length - 1 && ' > '}
        </span>
      ))}
    </div>
  );
};