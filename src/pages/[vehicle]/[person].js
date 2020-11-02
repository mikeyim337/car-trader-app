import {useRouter} from 'next/router' //read the parameters from the url

const Person = () => {
  const router = useRouter();

  return <h2>{router.query.person}'s {router.query.vehicle}</h2>;
};

export default Person;
