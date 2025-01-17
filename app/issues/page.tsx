import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssuesPage = () => {
  return (
    <div>
      <Link href="/issues/new" passHref>
        <Button>New Issue</Button>
      </Link>
    </div>
  )
}

export default IssuesPage
