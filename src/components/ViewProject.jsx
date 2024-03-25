'use client'

import { useSearchParams } from "next/navigation"

export default function ViewProject(){
  const urlQuery = useSearchParams();
  return(
    <div>
      <h1>{urlQuery.get('project')}</h1>
    </div>
  )
}