import classNames from "classnames";
import React from 'react';
import { cookies } from 'next/headers';

const HomePage = async ()=>{

  const token = await cookies()
  console.log(token)
  return (
    <div>
      {token.get('token')?.value}
    </div>
  )
}

export default HomePage