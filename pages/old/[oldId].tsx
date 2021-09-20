import { useRouter } from "next/router";
import Link from 'next/link'


const Old = () => {
  const router = useRouter();

  console.log(router)

  return <div>
    <h3>
    Old Page {router.query && router.query.news}
    </h3>
    <Link href="/news">back news home</Link>
  </div>
}

export default Old;