import Link from 'next/link'

const people = [
  {vehicle: 'car', name: 'mike'},
  {vehicle: 'bike', name: 'john'},
  {vehicle: 'airplane', name: 'sarah'},
]


const Details = () => {
  return <div>
    {people.map(e => (
      <div>

    <Link as={`/${e.vehicle}/${e.name}`} href="/[vehicle]/[person]">
      <a>Navigate to {e.name}'s {e.vehicle}</a>
    </Link>
      </div>
    ))}
  </div>;
};

export default Details;
