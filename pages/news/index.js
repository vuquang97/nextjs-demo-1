
import Link from 'next/link'
import { useRouter } from 'next/router'

const NewHome = (props) => {
  const { data } = props;
  const router = useRouter();

  async function getListData() {
    const data = await fetch('/api/new-api', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log('xxx 2 === ', await data.json())
  }

  return <div>
    <h2>New Home</h2>
    <button
      type="button"
      onClick={() => {
        getListData()
      }}
    > Get data</button>
    <ul className="xxx">
      {
        data && data.map((item, index) => <li key={index}>
          <h3>
          <Link href={`/news/${item._id}`}>{item.name}</Link>
            </h3>
          <h4>{item.description}</h4>
        </li>)
      }
    </ul>
  </div>
}

export default NewHome;