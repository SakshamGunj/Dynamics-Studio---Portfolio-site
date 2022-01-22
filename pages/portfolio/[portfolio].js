import React from 'react';
import Portfolio from '../../src/components/Portfolio';
import { useRouter } from 'next/router';

function portfolio() {
  const router = useRouter()
  const query = router.query.portfolio

  return (
    <Portfolio query={query} />
  );
}

export default portfolio;
