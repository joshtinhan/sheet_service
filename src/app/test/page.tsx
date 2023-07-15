async function getData() {
  const res = await fetch('http://localhost:3001/api/auth')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

    // console.log('====================================');
    // console.log(res.body);
    // console.log('====================================');
  return res.body
}

export default async function Test() {
    const data = await getData()
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                Get started by editing&nbsp;
                <code className="font-mono font-bold">src/app/test/page.tsx</code>
                </p>
            </div>
        </main> 
    )
}